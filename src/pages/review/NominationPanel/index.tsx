import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Dialog } from '@uiToolkit/Dialog';
import { ThemeType } from '@themes/clients/baseTheme';
import { TextLabelMedium } from '@uiToolkit/Typography';
import Input from '@uiToolkit/Input';
import { Search } from '@iconComponents';
import Filter from './Filters';
import { Listitem } from '@uiToolkit/Listitem';
import { useDispatch, useSelector } from 'react-redux';
import useSearchMutation from './useSearchMutation';
import useNominatePeerHook from './useNominatePeerHook';
import useNominateListMutation from './useNominateListMutation';
import useNominateList from './useNominateList';
import Avatar from '@uiToolkit/Avatar';
import ReviewerLevel from './ReviewerLevel';
import { NominatePeerUtil } from './NominatePeerUtil';
import EmptyState from './EmptyState';
import { Button } from 'uiToolkit/Button';
import { BUTTON_VARIANT } from '@uiToolkit/Button/Button';

const FilterArray = [
  { filterName: 'Within team' },
  { filterName: 'Outside team' },
  { filterName: 'Senior to me' },
  { filterName: 'Junior to me' },
  { filterName: 'Peer' },
];

const STRING_CONSTANTS = {
  LHS: {
    HEADING: 'Nominate reviwers for your annual review',
    LEVELS: [
      {
        title: 'Add 1-3 reviewers above your level (Lead, manager, etc)',
      },
      {
        title: 'Add 1-3 reviewers At your level (Peer, colleagues))',
      },
      {
        title: 'Add 1-3 reviewers Below your level (Reportees, etc)',
      },
    ],
  },
  RHS: {
    HEADING: 'Suggested reviewers',
    FILTERS: ['Recommended', 'Within team', 'Outside team', 'Senior to me', 'Peer', 'Junior to me'],
  },
};

const Wrapper = styled.div`
  display: flex;
`;

const LHS = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

type RHSTypes = {
  theme?: ThemeType;
};

const RHS = styled.div<RHSTypes>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background: ${({ theme }) => theme.colors.surfaces.bg94};
`;

interface INominationPanel {
  isOpen: boolean;
}

const SearchWrap = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.surfaces.bg96};
  border-radius: 12px;
  padding: 12px;
  margin: 0 12px;
  flex-direction: column;
`;

const FilterWrap = styled.div`
  background: ${({ theme }) => theme.colors.surfaces.bg94};
  padding: 12px;
  margin-top: 24px;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const NominationPanel = ({ isOpen }: INominationPanel) => {
  const dispatch = useDispatch();
  const { mutate, data: searchData } = useSearchMutation();
  const { data: nominatePeerData } = useNominatePeerHook(239);
  const { data: nominateListData } = useNominateList();
  const exclusions = nominatePeerData?.data?.entity?.exclusions ?? [];
  const [exclusionArray, setExclusionArray] = useState(exclusions);
  const { mutate: nominateListMutate } = useNominateListMutation();

  useEffect(() => {
    const searchData = {
      text: null,
      cohortType: null,
      limit: 10,
      feedbackFormId: 4112,
    };

    mutate(searchData);
  }, []);

  const [first, setfirst] = useState<string>('');
  const onClose = () => {};

  const theme = useTheme();

  const onChange = (e: any) => {
    const searchData = {
      text: e.target.value,
      cohortType: null,
      limit: 10,
      feedbackFormId: 4112,
    };
    setfirst(e.target.value);
    mutate(searchData);
  };

  const handleFilterClick = (index: number) => {};

  const renderFilters = (): JSX.Element => {
    const filterArray = nominatePeerData?.data?.entity?.peerLimits ?? [];
    return (
      <FilterWrap>
        {filterArray.map((item: any, index: number) => (
          <Filter
            item={item}
            isSelected={index === 2}
            onClick={handleFilterClick}
            addMarginTop={index > 1}
            key={index}
            index={index}
          />
        ))}
      </FilterWrap>
    );
  };

  const getSubTitle = (strArray: string[]) => {
    const newStrArray = strArray.map((item) => item.toLowerCase().replace('_', ' ').replace(',', ', '));
    const finalstr = newStrArray.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
    return finalstr;
  };

  const handleDragEnd = (e: any, item: any) => {
    const updatedExclusions = [...exclusionArray, item.employee.id];
    setExclusionArray(updatedExclusions);
  };

  const dragOver = (e: any) => {
    if (e) e.stopPropagation();
  };

  const handleDragStart = (e: any, item: any) => {
    const stringiFiedData = JSON.stringify(item);
    e.dataTransfer.setData('data', stringiFiedData);
    e.dataTransfer.effectAllowed = 'copyMove';
  };

  const renderSearchList = () => {
    const listArray = searchData?.data?.entity ?? [];
    if (listArray?.length > 0) {
      return listArray.map((item: any, index: number) => {
        const subTitleStr = getSubTitle(item.peerPoolTypes).join();
        return (
          <Box
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={(e) => handleDragEnd(e, item)}
            onDragOver={dragOver}
            key={index}
          >
            <Listitem
              title={item.employee.displayName}
              leftComponent={<Avatar size="medium" src={item.employee.profilePhoto} showStarIcon={false} />}
              subTitle={subTitleStr}
              isDisabled={exclusionArray.includes(item.employee.id)}
              isBeingDragged={true}
            />
          </Box>
        );
      });
    } else return <EmptyState />;
  };

  const renderSearchAndRecommendation = () => (
    <SearchWrap>
      <>
        <Input
          placeholder={'Search'}
          handleChange={onChange}
          value={first}
          withBackground={false}
          endIcon={<Search />}
        />
        {renderFilters()}
        <Box overflow={'auto'}>{renderSearchList()}</Box>
      </>
    </SearchWrap>
  );

  const renderPeers = () => {
    const list = NominatePeerUtil.getList('ALL_ORG', nominateListData?.data?.entity?.reviewItems);
    const peerData = NominatePeerUtil.getLevelData(nominatePeerData?.data?.entity?.peerLimits);
    return <ReviewerLevel list={list} level={'ALL_ORG'} extraData={peerData} />;
  };

  const onCancel = () => {};

  const onSave = () => {
    nominateListMutate([]);
  };

  const renderActionButtons = () => (
    <Box
      background={theme.colors.surfaces.g90}
      display="flex"
      padding="24px 0"
      paddingRight="24px"
      justifyContent="flex-end"
      marginTop="12px"
    >
      <Button variant={BUTTON_VARIANT.outlined} onClick={onCancel} sx={{ mr: '12px' }}>
        Cancel
      </Button>
      <Button variant={BUTTON_VARIANT.solid} onClick={onSave}>
        Save
      </Button>
    </Box>
  );

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <LHS>
          <TextLabelMedium color={theme.colors.surfaces.bg40} sx={{ ml: '36px', mt: '38px' }}>
            {STRING_CONSTANTS.LHS.HEADING}
          </TextLabelMedium>
          {renderPeers()}
          {renderActionButtons()}
        </LHS>
        <RHS>
          <TextLabelMedium color={theme.colors.surfaces.bg40} sx={{ pl: '36px', mt: '38px', mb: '26px' }}>
            {STRING_CONSTANTS.RHS.HEADING}
          </TextLabelMedium>
          {renderSearchAndRecommendation()}
        </RHS>
      </Wrapper>
    </Dialog>
  );
};

export default NominationPanel;
