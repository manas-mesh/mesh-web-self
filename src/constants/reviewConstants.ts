export const REVIEW_RESPONSE_PROVIDER_TYPE_TITLE_MAP = {
  SELF: 'Self Review',
  MANAGER: 'Manager Review',
  PEER: 'Peer Review',
  UPWARD: 'Upward Review',
  NOMINATOR: 'Peer Nomination',
};

export const REVIEW_SUBMISSION_STATUS_MAP = {
  NOT_STARTED: {
    actionText: 'Start',
    statusText: 'Not Started',
    // textColor: oldTheme.palette.red.main,
    // bgColor: oldTheme.palette.red.light,
  },
  IN_PROGRESS: {
    actionText: 'Continue',
    statusText: 'In progress',
    // textColor: oldTheme.palette.orange.main,
    // bgColor: oldTheme.palette.orange.light,
  },
  SUBMITTED: {
    actionText: 'View Result',
    statusText: 'Completed',
    // textColor: oldTheme.palette.green.main,
    // bgColor: oldTheme.palette.green.light,
  },
  ACKNOWLEDGED: {
    actionText: 'View Result',
    statusText: 'Acknowledged',
    // textColor: oldTheme.palette.green.main,
    // bgColor: oldTheme.palette.green.light,
  },
};

export const FEEDBACK_FORM_TYPE = {
  PROVIDED: 'PROVIDED',
  REQUESTED: 'REQUESTED',
  PROVIDING_REQUESTED: 'PROVIDING_REQUESTED',
  SHOW_PROVIDED: 'SHOW_PROVIDED',
  SHOW_REQUESTED: 'SHOW_REQUESTED',
  LIST_FEEDBACKS: 'LIST_FEEDBACKS',
};

export const CONTINUOUS_FEEDBACK_FORM_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  COMPLETED: 'SUBMITTED',
};

export const ACKNOWLEDGEMENT_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  SUBMITTED: 'SUBMITTED',
};

export const NOMINATION_PANEL_CLOSING_STATUS = {
  CANCELLED: 'CANCELLED',
  SUCCESSFUL: 'SUCCESSFUL',
};

export const TEAM_REVIEW_TEXTS = {
  ERROR_MSG: 'No data to display',
};

export const QUESTION_TYPES = {
  GOAL: 'GOAL',
  QNA: 'QNA',
  COMPETENCY: 'COMPETENCY',
};
export const questionTypeOptions = [
  {
    label: 'Goal',
    value: QUESTION_TYPES.GOAL,
  },
  {
    label: 'Generic',
    value: QUESTION_TYPES.QNA,
  },
  {
    label: 'Competency',
    value: QUESTION_TYPES.COMPETENCY,
  },
];

export const ANSWER_TYPES = {
  STAR_RATING: 'STAR_RATING',
  NUMBER_RATING: 'NUMBER_RATING',
  DROP_DOWN: 'DROP_DOWN',
  NONE: 'NONE',
};
export const answerTypeOptions = [
  {
    label: 'Score',
    value: ANSWER_TYPES.STAR_RATING,
  },
  {
    label: 'Scale',
    value: ANSWER_TYPES.NUMBER_RATING,
  },
  {
    label: 'Options',
    value: ANSWER_TYPES.DROP_DOWN,
  },
  {
    label: 'Text',
    value: ANSWER_TYPES.NONE,
  },
];

export const REVIEW_PROVIDER_TYPES = {
  SELF: 'SELF',
  MANAGER: 'MANAGER',
  PEER: 'PEER',
  UPWARD: 'UPWARD',
};

export const REVIEW_FORM_COMPLETION_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
};

export const REVIEW_ANSWER_TYPE_MAP = {
  DROP_DOWN: 'DROP_DOWN',
  NONE: 'NONE',
  MULTI_SELECT: 'MULTI_SELECT',
  STAR_RATING: 'STAR_RATING',
  NUMBER_RATING: 'NUMBER_RATING',
};

export const REVIEW_FORMS_TYPE_MAP = {
  COMPETENCY: 'COMPETENCY',
  QNA: 'QNA',
  GOAL: 'GOAL',
  PEER_NOMINATION: 'PEER_NOMINATION',
};
