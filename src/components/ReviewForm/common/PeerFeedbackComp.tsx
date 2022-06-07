import { noOp } from 'constants/index';
import { Box } from '@chakra-ui/react';
import { SkeletonLoader } from '@uiToolkit/SkeletonLoader';
import { REVIEW_ANSWER_TYPE_MAP } from 'constants/reviewConstants';
import React, { useCallback, useEffect, useState } from 'react';
import { getPeerFeedback } from 'services/performanceReview';
import { Button } from 'uiToolkit/Button';
import { ScaleInput } from 'uiToolkit/ScaleInput';
import { TextBodyMedium, TextLabelLarge, TextLabelSmall } from 'uiToolkit/Typography';
import { toTitleCase } from '@utils/stringHelpers';

import { BaseStarRating } from '@uiToolkit/BaseStarRating/BaseStarRating';
import { ThemeType } from '@themes/clients/baseTheme';
import { useTheme } from '@emotion/react';
import Avatar from '@uiToolkit/Avatar';
import { useAppSelector } from '@hooks/reduxHooks';
import { shallowEqual } from 'react-redux';

const NO_DATA_MSG = 'No data to display';
const ERROR_MSG = 'Request to fetch peer feedback failed!';
const NO_FEEDBACK_YET = 'No Feedback yet.';

interface PeerFeedbackDisplayCardI {
  employee: any;
  feedbackText: string;
  selectedAnswerOptions: any[];
  answerType: string | null;
  providerType: string;
  isLastItem: boolean;
  answerOptions: any[];
}

const PeerFeedbackDisplayCard: React.FC<PeerFeedbackDisplayCardI> = ({
  employee,
  feedbackText,
  selectedAnswerOptions,
  answerType,
  providerType,
  isLastItem,
  answerOptions,
}) => {
  let someDataPresent = false;
  someDataPresent = selectedAnswerOptions && selectedAnswerOptions.length > 0;
  someDataPresent = someDataPresent || (!!feedbackText && feedbackText.length > 0);
  const theme: ThemeType = useTheme();

  return (
    <Box bg={theme.colors.surfaces.g96} sx={{ borderRadius: '12px', p: 3, mb: 3 }}>
      <FeedbackHeader employee={employee} providerType={providerType} />
      <RatingComponent
        selectedAnswerOptions={selectedAnswerOptions}
        answerType={answerType}
        answerOptions={answerOptions}
      />
      <FeedbackComponent feedbackText={feedbackText} answerType={answerType} />
      {!someDataPresent && <NoFeedbackComponent />}
    </Box>
  );
};

// BaseListItem should have been used here as per mock but, the already created Listitem does not handle all cases yet
// could be swapped back after the BaseListItem and Listitem is properly done
const FeedbackHeader = ({ employee, providerType }: { employee: any; providerType: string }) => {
  const { displayName, designation, profilePhotoSrc } = employee;
  return (
    <Box sx={{ display: 'flex', mb: 3 }}>
      <Avatar src={profilePhotoSrc} size="mediumLarge" />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, ml: 2 }}>
        <TextLabelLarge>{displayName}</TextLabelLarge>
        <TextLabelSmall>{designation}</TextLabelSmall>
      </Box>
      {providerType && (
        <Button display="inline" sx={{ color: 'white', pointerEvents: 'none' }}>
          {toTitleCase(providerType)}
        </Button>
      )}
    </Box>
  );
};

const RatingComponent = ({
  selectedAnswerOptions,
  answerType,
  answerOptions,
}: {
  selectedAnswerOptions: any[];
  answerType: string | null;
  answerOptions: any[];
}) => {
  const getAnswerComponent = () => {
    switch (answerType) {
      case REVIEW_ANSWER_TYPE_MAP.STAR_RATING:
        return (
          <Box>
            <TextLabelSmall>Score</TextLabelSmall>
            <BaseStarRating disabled maxRating={answerOptions.length} rating={selectedAnswerOptions[0]?.id || null} />
          </Box>
        );
      case REVIEW_ANSWER_TYPE_MAP.NUMBER_RATING: {
        const options = answerOptions.map((option) => ({ label: option.score, value: option.id }));
        const startText = answerOptions[0]?.description;
        const endText = answerOptions[answerOptions.length - 1]?.description;

        return (
          <Box>
            <TextLabelSmall>Score</TextLabelSmall>
            <ScaleInput
              onChange={noOp}
              value={selectedAnswerOptions?.[0]?.id}
              isDisabled
              options={options}
              startText={startText}
              endText={endText}
              withBackground={false}
            />
          </Box>
        );
      }
      default:
        return selectedAnswerOptions.map(({ description, id }) => (
          <Box mb={3} key={id}>
            <TextLabelSmall>Score</TextLabelSmall>
            <TextBodyMedium whiteSpace="pre-line">{description}</TextBodyMedium>
          </Box>
        ));
    }
  };
  return <>{selectedAnswerOptions && selectedAnswerOptions.length ? getAnswerComponent() : null}</>;
};

const FeedbackComponent = ({ feedbackText, answerType }: { feedbackText: string; answerType: string | null }) => (
  <>
    {feedbackText && feedbackText.length ? (
      <Box>
        {answerType !== REVIEW_ANSWER_TYPE_MAP.NONE && <TextLabelSmall>Comments/examples</TextLabelSmall>}
        <TextBodyMedium whiteSpace={'pre-line'}>{feedbackText}</TextBodyMedium>
      </Box>
    ) : null}
  </>
);

const NoFeedbackComponent = () => <TextBodyMedium>{NO_FEEDBACK_YET}</TextBodyMedium>;

const PlaceHolderComp = () => (
  <Box p={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <TextLabelSmall textAlign={'center'}>
      Select a question to view
      <br />
      self and peer feedback
    </TextLabelSmall>
  </Box>
);

const PeerFeedbackComp = ({ reviewId, employeeId }: { reviewId: string; employeeId: string }) => {
  const { peerFeedback } = useAppSelector((state) => state.reviewFormFilling.reviewState, shallowEqual);
  const theme: ThemeType = useTheme();
  const { goalId, competencyId, questionId, answerType, answerOptions } = peerFeedback;
  const [loading, setLoading] = useState(false);
  const [peerFeedbacks, setPeerFeedbacks] = useState<any[] | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    getPeerFeedback({
      goalId,
      competencyId,
      reviewId,
      employeeId,
      questionId,
    })
      .then((feedbacks: any) => {
        setPeerFeedbacks(feedbacks);
      })
      .catch((err: Error) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [competencyId, employeeId, goalId, questionId, reviewId]);

  const showLoader = useCallback(() => <SkeletonLoader skeletons={['10px', '10px']} />, []);

  const showNoData = useCallback(() => <TextLabelSmall>{NO_DATA_MSG}</TextLabelSmall>, []);

  const showErrorMessage = () => <TextLabelSmall color={theme.colors.errors.fields}>{ERROR_MSG}</TextLabelSmall>;

  useEffect(() => {
    if (questionId) fetchData();
  }, [questionId, goalId, competencyId, fetchData]);

  if (!questionId) {
    return <PlaceHolderComp />;
  }
  if (loading) {
    return showLoader();
  }
  if (peerFeedbacks === null) {
    return showErrorMessage();
  }
  if (peerFeedbacks.length === 0) {
    return showNoData();
  }

  return (
    <Box>
      {peerFeedbacks.map(({ employee, feedbackText, selectedAnswerOptions, providerType }, index) => (
        <PeerFeedbackDisplayCard
          key={index}
          employee={employee}
          feedbackText={feedbackText}
          selectedAnswerOptions={selectedAnswerOptions}
          answerType={answerType}
          providerType={providerType}
          isLastItem={index === peerFeedbacks.length - 1}
          answerOptions={answerOptions}
        />
      ))}
    </Box>
  );
};

export { PeerFeedbackComp };
