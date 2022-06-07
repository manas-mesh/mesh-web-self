import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeType } from '@themes/clients/baseTheme';
import { TextLabelSmall } from '@uiToolkit/Typography';
import { DropZone } from '@uiToolkit/DropZone';
import { ProgressBar } from '@uiToolkit/ProgressBar';
import { getReviewerLevelHeading } from './NominatePeerUtil';
import { Listitem } from '@uiToolkit/Listitem';
import Avatar from '@uiToolkit/Avatar';
import { EmployeeModel } from 'models/EmployeeModel';
import { DoubleTick } from '@iconComponents';

interface IProps {
  list: any;
  level: string;
  extraData: any;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DROP_ZONE_LABEL = 'Drag and drop from the right panel to add more.';

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.surfaces.bg94};
  border-radius: 12px;
  flex-direction: column;
  margin-top: 20px;
  margin: 0 12px;
  padding: 12px;
`;

const ReviewerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 200px;
`;

const ReviewerLevel = ({ list, level, extraData }: IProps) => {
  const [approvers, setApprovers] = useState(list);
  const getSuppotingText = () => `${approvers.length} / ${extraData.maxPeers}`;

  const renderProgressBar = (): JSX.Element => {
    const value = (approvers.length * 100) / extraData.maxPeers;
    return <ProgressBar renderElement={'text'} supportingText={getSuppotingText()} value={value} />;
  };

  const getRightIcon = (isApproved: boolean): JSX.Element | undefined => {
    if (isApproved) {
      return <DoubleTick />;
    }
  };

  const renderReviewers = (): JSX.Element[] | undefined => {
    if (approvers && approvers.length > 0) {
      return approvers.map((item: any, index: number) => {
        const employee = item.peerProfile ? new EmployeeModel(item.peerProfile.employee) : item.employee;
        const isApproved = item?.review?.peerStatus === 'ACCEPTED' ?? false;
        return (
          <Listitem
            title={employee.displayName}
            key={index}
            leftComponent={<Avatar size="small" src={employee.profilePhoto} showStarIcon={false} />}
            rightComponent={getRightIcon(isApproved)}
          />
        );
      });
    }
  };

  const handleDrop = (data: any) => {
    const updatedApprovers = [...approvers, data];
    setApprovers(updatedApprovers);
  };

  return (
    <Wrapper>
      <TextLabelSmall margin={'76px 36px 0px 36px'}>
        {getReviewerLevelHeading(level, extraData.minPeers, extraData.maxPeers)}
      </TextLabelSmall>
      {renderProgressBar()}
      <Container>
        <ReviewerWrapper>{renderReviewers()}</ReviewerWrapper>
        <DropZone label={DROP_ZONE_LABEL} onDrop={handleDrop} />
      </Container>
    </Wrapper>
  );
};

export default ReviewerLevel;
