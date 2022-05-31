import { ENDPOINTS } from '@constants/endpoints';
import axios from 'axios';

/*
  Organization
 */
export const getReviewFormApi = ({
  formName,
  employeeId,
  reviewId,
  providerId,
  responseId,
}: {
  formName: string;
  employeeId: string;
  reviewId: string;
  providerId: string;
  responseId: string;
}) => {
  const url = ENDPOINTS.performanceReview.reviewForm;

  const queryParams = {
    form_name: formName,
    review_id: reviewId,
    emp_id: employeeId,
  };

  // In case of Anonymous Provider, we're passing response_id instead of provider_id
  if (providerId) {
    (queryParams as any).provider_id = providerId;
  } else {
    (queryParams as any).response_id = responseId;
  }

  return axios.get(url, {
    withCredentials: true,
    params: queryParams,
  });
};

export const getSummaryStatsApi = ({
  employeeId,
  reviewId,
  providerId,
}: {
  employeeId: string;
  reviewId: string;
  providerId: string;
}) => {
  const url = ENDPOINTS.performanceReview.summaryStats;
  return axios.get(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: employeeId,
      provider_id: providerId,
    },
  });
};

export const updateQuestionResponseApi = ({
  responseBody,
  employeeId,
  goalId,
  competencyId,
  reviewId,
}: {
  responseBody: any;
  employeeId: string;
  goalId: string;
  competencyId: string;
  reviewId: string;
}) => {
  const url = ENDPOINTS.performanceReview.reviewForm;
  return axios.put(url, responseBody, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: employeeId,
      goal_id: goalId,
      competency_id: competencyId,
    },
  });
};

export const getActiveReviewsApi = ({
  limit,
  offset,
  includeCount,
}: {
  limit: number;
  offset: number;
  includeCount: boolean;
}) => {
  const url = ENDPOINTS.performanceReview.activeReviews;
  return axios.get(url, {
    withCredentials: true,
    params: {
      limit,
      offset,
      include_count: includeCount,
    },
  });
};

export const getArchivedReviewsApi = ({
  limit,
  offset,
  includeCount,
}: {
  limit: number;
  offset: number;
  includeCount: boolean;
}) => {
  const url = ENDPOINTS.performanceReview.archivedReviews;
  return axios.get(url, {
    withCredentials: true,
    params: {
      limit,
      offset,
      include_count: includeCount,
    },
  });
};

export const getTeamReviewsApi = ({
  limit,
  offset,
  requestedReviewCycle,
}: {
  limit: number;
  offset: number;
  requestedReviewCycle: any;
}) => {
  const url = ENDPOINTS.performanceReview.teamReviews;
  return axios.get(url, {
    withCredentials: true,
    params: {
      limit,
      offset,
      requested_review_cycle: requestedReviewCycle,
    },
  });
};

export const getRequestedReviewsApi = ({
  limit,
  offset,
  includeCount,
}: {
  limit: number;
  offset: number;
  includeCount: boolean;
}) => {
  const url = ENDPOINTS.performanceReview.requestedReviews;
  return axios.get(url, {
    withCredentials: true,
    params: {
      limit,
      offset,
      include_count: includeCount,
    },
  });
};

export const getPeerFeedbackApi = ({
  goalId,
  competencyId,
  questionId,
  employeeId,
  reviewId,
}: {
  goalId: string;
  competencyId: string;
  questionId: string;
  employeeId: string;
  reviewId: string;
}) => {
  const url = ENDPOINTS.performanceReview.peerFeedback;
  return axios.get(url, {
    withCredentials: true,
    params: {
      goal_id: goalId,
      competency_id: competencyId,
      question_id: questionId,
      review_id: reviewId,
      emp_id: employeeId,
    },
  });
};

export const submitReviewApi = ({ employeeId, reviewId }: { employeeId: string; reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.submitReview;
  return axios.post(url, undefined, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: employeeId,
    },
  });
};

export const getReviewProvidersApi = ({ employeeId, reviewId }: { employeeId: string; reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.reviewProviders;
  return axios.get(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: employeeId,
    },
  });
};

export const acknowledgeReviewApi = ({ providerId, reviewId }: { providerId: string; reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.acknowledge;
  return axios.post(url, undefined, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      provider_id: providerId,
    },
  });
};

export const getNominatedPeersApi = ({ reviewId, empId }: { reviewId: string; empId: string }) => {
  const url = ENDPOINTS.performanceReview.nominatePeers;
  return axios.get(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: empId,
    },
  });
};

export const getPeerPoolApi = ({ reviewId, empId }: { reviewId: string; empId: string }) => {
  const url = ENDPOINTS.performanceReview.peerPoolDetails;
  return axios.get(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: empId,
    },
  });
};

export const nominatePeerApi = ({
  employees,
  reviewId,
  empId,
}: {
  employees: any;
  reviewId: string;
  empId: string;
}) => {
  const url = ENDPOINTS.performanceReview.nominatePeers;
  return axios.put(url, employees, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: empId,
    },
  });
};

export const removeNominationApi = ({ employee, reviewId }: { employee: any; reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.nominatePeers;
  return axios.delete(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
    },
    data: employee,
  });
};

export const acceptNominationApi = ({ employeeId, reviewId }: { employeeId: string; reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.acceptNomination;
  return axios.post(url, undefined, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: employeeId,
    },
  });
};

export const rejectNominationApi = ({ employeeId, reviewId }: { employeeId: string; reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.rejectNomination;
  return axios.post(url, undefined, {
    withCredentials: true,
    params: {
      review_id: reviewId,
      emp_id: employeeId,
    },
  });
};

export const getPeerStatusApi = () => {
  const url = ENDPOINTS.performanceReview.peerStatus;
  return axios.get(url, {
    withCredentials: true,
  });
};

export const getUpwardStatusApi = () => {
  const url = ENDPOINTS.performanceReview.upwardStatus;
  return axios.get(url, {
    withCredentials: true,
  });
};

export const getEmployeeCohortApi = ({ reviewId, body }: { reviewId: string; body: any }) => {
  const url = ENDPOINTS.performanceReview.peerType;
  return axios.post(url, body, {
    withCredentials: true,
    params: {
      review_id: reviewId,
    },
  });
};

export const getActiveReviewsCountApi = () => {
  const url = ENDPOINTS.performanceReview.activeReviewsCount;
  return axios.get(url, {
    withCredentials: true,
  });
};

export const getPastFeedbacksApi = ({
  offset,
  limit,
  includeCount,
  receiverEmployeeId,
}: {
  limit: number;
  offset: number;
  includeCount: boolean;
  receiverEmployeeId: string;
}) => {
  const url = ENDPOINTS.performanceReview.pastFeedbacks;
  return axios.get(url, {
    withCredentials: true,
    params: {
      offset: offset,
      limit: limit,
      include_count: includeCount,
      receiver_employee_id: receiverEmployeeId,
    },
  });
};

export const getReviewHelpDocumentsApi = ({ reviewId }: { reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.documents;
  return axios.get(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
    },
  });
};

export const getReviewHelpFAQsApi = ({ reviewId }: { reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.faqs;
  return axios.get(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
    },
  });
};
export const getReviewHelpTimelineApi = ({ reviewId }: { reviewId: string }) => {
  const url = ENDPOINTS.performanceReview.timeline;
  return axios.get(url, {
    withCredentials: true,
    params: {
      review_id: reviewId,
    },
  });
};

export const publishReview = ({ reviewCycleId, empId }: { reviewCycleId: string; empId: string }) => {
  const url = ENDPOINTS.performanceReview.publish;
  return axios.put(url, undefined, {
    withCredentials: true,
    params: {
      review_cycle_id: reviewCycleId,
      receiver_employee_id: empId,
    },
  });
};

export const unPublishReview = ({ reviewCycleId, empId }: { reviewCycleId: string; empId: string }) => {
  const url = ENDPOINTS.performanceReview.unpublish;
  return axios.put(url, undefined, {
    withCredentials: true,
    params: {
      review_cycle_id: reviewCycleId,
      receiver_employee_id: empId,
    },
  });
};
