import { Box } from '@chakra-ui/react';
import { TextParseComponent } from 'components/TextParseComponent';
import React from 'react';
import { TextBodyMedium } from 'uiToolkit/Typography';

interface GoalNameWeightageI {
  goal: any;
  goToTaskDetails: any;
  openWeightagePanel: () => void;
  employeeId: string;
  isShowGoalWeightage: boolean;
}

// to be used when goal specific question view is created in Review filling page
export const GoalNameWeightage: React.FC<GoalNameWeightageI> = ({
  goal,
  goToTaskDetails,
  openWeightagePanel,
  employeeId,
  isShowGoalWeightage,
}) => (
  <Box>
    <TextBodyMedium
      // wordBreak={true}
      // variant="body2"
      // color="textPrimary"
      onClick={(e) => {
        if (goToTaskDetails) goToTaskDetails(e, { taskId: goal.id, type: goal.type });
      }}
    >
      <TextParseComponent text={goal.text} res={goal.macros} />
    </TextBodyMedium>
    {isShowGoalWeightage && (
      <TextBodyMedium
        // variant="caption"
        // color="textSecondary"
        onClick={() => {
          if (openWeightagePanel) openWeightagePanel();
        }}
      >
        Weightage: <b>{goal.toIds.filter((emp: any) => emp.id === employeeId)[0]?.weightage}%</b>
      </TextBodyMedium>
    )}
  </Box>
);
