export const SUPPORT_EMAIL = 'support@mesh.ai';
export const FAQ_URL = 'https://www.mesh.ai/faqs';

export const GOAL_PROGRESS_STATUS_OBJECTS = {
  onTrack: {
    value: 'ON_TRACK',
    label: 'On-Track',
    progressLevel: 'ON_TRACK',
    order: 0,
  },
  offTrack: {
    value: 'OFF_TRACK',
    label: 'Off-Track',
    progressLevel: 'OFF_TRACK',
    order: 1,
  },
  atRisk: {
    value: 'AT_RISK',
    label: 'At-Risk',
    progressLevel: 'AT_RISK',
    order: 2,
  },
  closed: {
    value: 'CLOSED',
    label: 'Closed',
    progressLevel: 'CLOSED',
    order: 3,
  },
  closedAchieved: {
    value: 'ACHIEVED',
    label: 'Closed - Achieved',
    progressLevel: 'CLOSED',
  },
  closedNonAchieved: {
    value: 'NOT_ACHIEVED',
    label: 'Closed - Not Achieved',
    progressLevel: 'CLOSED',
  },
  closedDropped: {
    value: 'DROPPED',
    label: 'Closed - Dropped',
    progressLevel: 'CLOSED',
  },
};

export const GOAL_IN_PROGRESS_OPTIONS = [
  GOAL_PROGRESS_STATUS_OBJECTS.onTrack,
  GOAL_PROGRESS_STATUS_OBJECTS.offTrack,
  GOAL_PROGRESS_STATUS_OBJECTS.atRisk,
];

export const GOAL_CLOSED_OPTIONS = [
  GOAL_PROGRESS_STATUS_OBJECTS.closedAchieved,
  GOAL_PROGRESS_STATUS_OBJECTS.closedNonAchieved,
  GOAL_PROGRESS_STATUS_OBJECTS.closedDropped,
];

export const GOAL_PROGRESS_OPTIONS = [
  GOAL_PROGRESS_STATUS_OBJECTS.onTrack,
  GOAL_PROGRESS_STATUS_OBJECTS.offTrack,
  GOAL_PROGRESS_STATUS_OBJECTS.atRisk,
  GOAL_PROGRESS_STATUS_OBJECTS.closed,
];
