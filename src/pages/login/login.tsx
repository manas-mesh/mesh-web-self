import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import logoGif from 'assets/gifs/logo.gif';
import TeamWorkImage from 'assets/illustrations/teamwork.png';
import { useAuth } from 'components/AuthProvider';
import { SUPPORT_EMAIL } from 'constants/projectConstants';
import { ROUTES } from 'constants/routes';
import { useCallback, useEffect, useState } from 'react';
import { auth0Authenticate, getAuth0LoginUrl } from 'services/auth';
import { Button } from 'uiToolkit/Button';
import { TextBodyMedium, TextBodySmall, TextHeadlineSmall, TextTitleLarge } from 'uiToolkit/Typography';
import { useRouter } from 'next/router';
import { ThemeType } from '@themes/clients/baseTheme';
import { useTheme } from '@emotion/react';
import { Input } from '@uiToolkit/Input';
import { TextLink } from '@uiToolkit/TextLink';
import { Divider } from '@uiToolkit/commonComps';
import { BREAKPOINTS } from '@constants/mediaQueries';
import Image from 'next/image';

const containerCSS = {
  display: 'grid',
  'grid-template-columns': '5fr 3fr',
  height: '100vh',
  'min-width': BREAKPOINTS[0] + 'px',
};

export const ButtonContainer = styled('div')`
  text-align: center;
`;

export const ButtonSpacer = styled('div')`
  display: inline-block;
  width: 4%;
`;

const LeftImageView = () => {
  const theme: ThemeType = useTheme();
  return (
    <Box
      bg={theme.colors.surfaces.lightBlue}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      display="flex"
    >
      <TextHeadlineSmall mb={5} textAlign="center">
        Performance management that fits the way you work
      </TextHeadlineSmall>
      <TextBodyMedium textAlign="center" mb={8}>
        Mesh helps remote hybrid companies execute their growth plans,
        <br />
        in a simple and social way that keeps employees engaged.
      </TextBodyMedium>
      <Box width="45%" height="45%" position="relative">
        <Image src={TeamWorkImage} alt="Team work login hero image" priority />
      </Box>
    </Box>
  );
};

const RightFormView = ({
  org,
  invitationId,
  showLoggedOutMessage = false,
}: {
  org: string;
  invitationId: string;
  showLoggedOutMessage: boolean;
}) => {
  const [orgName, setOrgName] = useState(org || '');
  const [loading, setLoading] = useState(false);
  const theme: ThemeType = useTheme();

  const navigateToOrgUrl = useCallback(() => {
    setLoading(true);
    getAuth0LoginUrl({ orgName, invitationId })
      .then((loginLink: string) => {
        // setLoginType.bind(null, LOGIN_TYPES.saml);
        window.location.href = loginLink;
      })
      .catch((err: Error) => {
        setLoading(false);
      })
      .finally(() => {});
  }, [invitationId, orgName]);

  useEffect(() => {
    if (invitationId && org) {
      navigateToOrgUrl();
    }
  }, [invitationId, navigateToOrgUrl, org]);

  function handleChange(e) {
    setOrgName(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !loading && orgName) {
      navigateToOrgUrl();
    }
  }
  const isDisabled = loading || !(orgName && orgName.length > 1);

  if (invitationId) {
    return (
      <Box
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '300px',
          marginBottom: '20%',
        }}
      >
        <TextBodyMedium textAlign="center">Processing invitation...</TextBodyMedium>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '300px',
        m: 'auto',
        // marginBottom: '20%',
      }}
    >
      <Box width="50%" height="50%" position="relative">
        <Image src={logoGif} alt="Logo" />
      </Box>
      {showLoggedOutMessage && <TextBodyMedium mt={120}>You have been logged out</TextBodyMedium>}
      <TextTitleLarge mt={showLoggedOutMessage ? 0 : 120}>
        Sign {showLoggedOutMessage ? 'back ' : ''}in to Mesh
      </TextTitleLarge>
      <TextBodySmall mt={6} mb={8} color={theme.colors.text.bg70}>
        {"Let's get you started!"}
      </TextBodySmall>

      <Input
        placeholder="Enter organization name"
        name="organization name"
        withBackground
        value={orgName}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <Button
        width="100%"
        // color={theme.palette.primary.main}
        onClick={navigateToOrgUrl}
        disabled={isDisabled}
        sx={{ mt: 7 }}
        // href={url}
      >
        Continue
      </Button>
      <Divider my={10} width="100%" />
      <TextBodySmall textAlign="center" color={theme.colors.text.bg70}>
        Having trouble signing in? You can reach out
      </TextBodySmall>
      <Box sx={{ mb: '30%' }}>
        <TextBodySmall textAlign="center" display="inline" color={theme.colors.text.bg70}>
          to us at &nbsp;
        </TextBodySmall>
        <TextLink href={`mailto:${SUPPORT_EMAIL}`} sx={{ textDecoration: 'none' }}>
          <TextBodySmall textAlign="center" display="inline" color={theme.colors.text.bg40}>
            {SUPPORT_EMAIL}
          </TextBodySmall>
        </TextLink>
      </Box>
    </Box>
  );
};
const Login = () => {
  // null: not tried, true: success, false: fail
  const [codeLoginAttempt, setCodeLoginAttempt] = useState<boolean | null>(null);
  const router = useRouter();
  const queryParams = router.query;
  const { w: org, action = '', code = '' }: { w: string; action: string; code: string } = queryParams;

  // for invite auth0 flow
  const { invitation: invitationId = '', organization_name = '' } = queryParams;

  const showLoggedOutMessage = action === 'logout';
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (codeLoginAttempt === null && code) {
      auth0Authenticate(code)
        .then(() => {
          router.push(ROUTES.home);
        })
        .catch(() => setCodeLoginAttempt(false));
    }
    // Bug in next js router https://github.com/vercel/next.js/discussions/29403
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, codeLoginAttempt]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push(ROUTES.home);
    }
    // Bug in next js router https://github.com/vercel/next.js/discussions/29403
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // do not render anything for the moments that it takes useEffect to redirect to home
  if (isAuthenticated) {
    return null;
  }

  return (
    <div>
      <div css={containerCSS}>
        <LeftImageView />
        <RightFormView
          org={org || organization_name}
          invitationId={invitationId}
          showLoggedOutMessage={showLoggedOutMessage}
        />
      </div>
    </div>
  );
};

export default Login;
