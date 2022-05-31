import styled from '@emotion/styled';
import { goToProfilePage, goToSearchDetailPage } from 'constants/helpers';
import { convertDateToString2 } from 'constants/helpers';
import emojiRegexLib from 'emoji-regex';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';
import { useRouter } from 'next/router';

const linkify = linkifyIt();
linkify.tlds(tlds);

const emojiRegex = emojiRegexLib();

function ParsedComponent({ className, prefix, content, onClick }) {
  return (
    <ContentSpan onClick={onClick} className={className}>
      {/* 
        Adding undefined content check here. if content is undefined then don't show prefix as well.
      */}
      {content === undefined ? (
        ''
      ) : (
        <>
          {prefix}
          {content}
        </>
      )}
    </ContentSpan>
  );
}

const LinkCSS = {
  // this color should be updated after new design are available for goals text with macros
  color: 'blue',
  cursor: 'pointer',
  hyphens: 'auto',
  wordBreak: 'break-word',
  overflowWrap: 'anywhere',
};

const ContentSpan = styled('span')(({ theme, ...props }) => ({
  '&.mentionComponent': {
    ...LinkCSS,
  },
  '&.demographicsComponent': {
    // this color should be updated after new design are available for goals text with macros
    color: 'green',
    cursor: 'pointer',
  },
  '&.strengthTag': {
    fontWeight: 600,
  },
  '&.employeeTag': {
    // this color should be updated after new design are available for goals text with macros
    color: 'blue',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  cursor: props.onClick ? 'pointer' : 'inherit',
}));

const Link = styled('a')(() => ({ ...LinkCSS }));

const Emoji = styled('span')(() => ({
  fontFamily: 'Segoe UI Emoji',
}));

// because parsed components are inside span
// and the text which was normal and wasn't any mention or tag
// that come just as it is
// so they all needed a container to apply white-space: pre-line
// style to them so that the text breaks on \n character
const ContainerSpan = styled('span')(({ theme, whiteSpace }) => ({
  whiteSpace: whiteSpace ?? 'pre-line',
  hyphens: 'auto',
  wordBreak: 'break-word',
  overflowWrap: 'anywhere',
}));

/**
 *
 *
 * @param {*} { text, res = object to use to get the value of data inside text }
 * @returns
 */
export function TextParseComponent({ text, res, color = 'textPrimary', weight = 'normal', whiteSpace = null }) {
  const macrosDisplayPattern = new RegExp(/(.?{{.*?}})/gm);
  const replacedLinkPattern = /({{.*?}})/gm;
  // const emojiRegex = /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/gm;
  // combination of macro Regex and emoji regex:
  // We are using brackets, otherwise the content gets removed when we split, but we want that particular content to be able to replace it
  const newPattern = new RegExp(macrosDisplayPattern.source + '|(' + emojiRegex.source + ')');
  // const newPattern = /(.?{{.*?}})|(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gm;
  const parts = text.split(newPattern);
  // remove leading and ending double curly braces
  function cleanMatch(groupMatch) {
    groupMatch = groupMatch.trim();
    groupMatch = groupMatch.replace('{{', '');
    groupMatch = groupMatch.replace('}}', '');
    return groupMatch;
  }

  const router = useRouter();
  const navigate = router.push;
  // if prefix like + is not present, empty string would be returned
  function getPrefixAndClassName(groupMatch) {
    let firstChar = '';
    // if first char is not { that means a prefix is present or it's a customDateDisplay macro. eg. ` {{customDateDisplay.29347982347892}}`
    if (groupMatch[0] !== '{') {
      firstChar = groupMatch[0];
      groupMatch = groupMatch.replace(firstChar, '');
    }
    let className;
    switch (firstChar) {
      case '#':
        className = 'strengthTag';
        break;
      case '@':
        className = 'mentionComponent';
        break;
      case '+':
        className = 'meshMoney';
        break;
      default:
        if (groupMatch.includes('customDateDisplay')) {
          className = 'customDateDisplayTag';
        } else if (groupMatch.includes('demographics.TASK')) {
          className = 'demographicsTaskDetailsTag';
        } else {
          className = '';
        }
    }
    return { prefix: firstChar, className };
  }

  function isEmployeeTag(tagType) {
    return tagType === 'employees';
  }

  function isDemographicsTag(tagType) {
    return tagType === 'demographics';
  }

  function isCustomDateDisplayTag(tagType) {
    return tagType === 'customDateDisplay';
  }

  // removing prefix like +,@,#
  function cleanKey(key) {
    return key.replace(/[+,@,#]/gm, '');
  }

  function getPrefixAndContent(groupMatch) {
    try {
      let { prefix, className } = getPrefixAndClassName(groupMatch);
      const cleanedMatch = cleanMatch(groupMatch);
      const keys = cleanedMatch.split('.');
      // this response will contain an object from which
      // we can get data using our keys
      let d = { ...res };
      const tagType = cleanKey(keys[0]);
      /* on post header, there was no @ tag, but we still need employee tagging there
        distinguishing the classNames because in postHeader it doesn't make sens to make it a mention component
       */
      if (tagType === 'employees' && className !== 'mentionComponent') className = 'employeeTag';
      let data;

      // we need to know if it was an employee and need employee data so that we can
      // go to that employee's profile page
      if (isEmployeeTag(tagType)) {
        data = { ...res[tagType][cleanKey(keys[1])] };
      } else if (isDemographicsTag(tagType)) {
        if (className === 'demographicsTaskDetailsTag') {
          data = res[tagType][keys[1]][keys[2]][keys[3]];
        } else {
          data = { ...res[tagType][cleanKey(keys[1]).toUpperCase()][cleanKey(keys[2])] };
        }
      } else if (isCustomDateDisplayTag(tagType)) {
        const date = new Date(parseInt(keys[1]));
        data = convertDateToString2(date);
      }
      if (className === 'strengthTag') {
        data = { ...res.attributes.orgTag[cleanKey(keys[2])] };
      }
      // drill into response using the keys that we have
      // the result will be the final content
      for (let i = 0; i < keys.length && d; i++) {
        d = d[cleanKey(keys[i])];
      }
      return {
        prefix,
        content: d,
        contentKeys: keys,
        className,
        data,
        tagType,
      };
    } catch (err) {
      // TODO: throw sentry exception
      return {
        content: groupMatch,
        className: '',
        prefix: '',
      };
    }
  }

  const result = [];
  parts.forEach((groupMatch, index) => {
    // match doesn't exist, it is undefined or null, we just return and do nothing in that case
    if (!groupMatch) return;
    // if the current split part is an emoji, then we replace it with emoji span
    if (emojiRegex.test(groupMatch)) {
      result.push(<Emoji role="img">{groupMatch}</Emoji>);
      return;
    }
    // if the current text doesn't match emoji or macros, we check whether it contains any link
    if (!newPattern.test(groupMatch)) {
      // const llf = linkify;
      // getting all the links using the library which draft js uses under the hood
      const links = linkify.match(groupMatch) || [];

      // because if link is not present, we can just straight away add the string to our result
      if (links.length > 0) {
        /* link is an object with keys: raw, text, url
           for every link we are replacing it with a value that we can easily split
           on later using regex. Also adding index so that we can figure out at what position
           it was inside our link */
        links.forEach((link, index) => {
          groupMatch = groupMatch.split(link.raw).join(`{{myAppLink.${index}}}`);
        });
        // splitting on the link pattern so that we can get our link inside our array
        const parts = groupMatch.split(replacedLinkPattern);
        parts.forEach((part) => {
          // if this is the part which matches our link
          if (part.match(replacedLinkPattern)) {
            // remove extra data
            part = part.replace('{{', '');
            part = part.replace('}}', '');
            const linkIndex = part.split('.')[1];
            // adding link tag to our result
            result.push(
              <Link target="_blank" href={links[linkIndex].url}>
                {links[linkIndex].raw}
              </Link>,
            );
          } else {
            result.push(part); // otherwise this is a normal text, just push it as it is
          }
        });
      } else {
        result.push(groupMatch);
      }
      return;
    }
    const prefixAndContent = getPrefixAndContent(groupMatch);
    const { tagType } = prefixAndContent;
    switch (prefixAndContent.className) {
      case 'mentionComponent':
      case 'employeeTag': {
        if (tagType === 'employees') {
          result.push(
            <ParsedComponent
              onClick={() => goToProfilePage({ navigate, employeeId: prefixAndContent.data.uuid })}
              key={`textEmployeeComponent${index}`}
              {...prefixAndContent}
            />,
          );
        } else {
          result.push(
            <ParsedComponent
              onClick={() =>
                goToSearchDetailPage({
                  navigate,
                  searchType: prefixAndContent.data.filterTagType,
                  typeId: prefixAndContent.data.uuid,
                  label: prefixAndContent.data.displayName,
                })
              }
              key={`textEmployeeComponent${index}`}
              {...prefixAndContent}
              className="demographicsComponent"
            />,
          );
        }
        break;
      }
      case 'strengthTag':
        result.push(
          <ParsedComponent
            // onClick={() =>
            //   goToSearchDetailPage({
            //     navigate,
            //     searchType: SEARCH_TAG_TYPES.tag,
            //     typeId: prefixAndContent.data.uuid,
            //     label: prefixAndContent.data.name
            //   })
            // }
            key={`tagComponent${index}`}
            {...prefixAndContent}
          />,
        );
        break;
      case 'demographicsTaskDetailsTag':
        result.push(
          <strong>
            {' '}
            {/* to parse macros in task name */}
            <TextParseComponent
              res={res}
              text={prefixAndContent.data}
              weight={600}
              // color={theme.palette.text.dark1}
            />
          </strong>,
        );
        break;
      case 'customDateDisplayTag':
        result.push(<strong> {prefixAndContent.data}</strong>);
        break;

      default: {
        result.push(<ParsedComponent key={`textComponent${index}`} {...prefixAndContent} />);
      }
    }
  });
  return (
    <ContainerSpan whiteSpace={whiteSpace} color={color} weight={weight}>
      {result}
    </ContainerSpan>
  );
}
