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
  providerId?: string;
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

export const getActiveReviewsCountApi = () => {
  const url = ENDPOINTS.performanceReview.activeReviewsCount;
  return axios.get(url, {
    withCredentials: true,
  });
};
