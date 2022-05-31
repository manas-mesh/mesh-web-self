import { REVIEW_FORMS_TYPE_MAP } from '@constants/reviewConstants';
import {
  acceptNominationApi,
  acknowledgeReviewApi,
  getActiveReviewsApi,
  getActiveReviewsCountApi,
  getArchivedReviewsApi,
  getEmployeeCohortApi,
  getNominatedPeersApi,
  getPastFeedbacksApi,
  getPeerFeedbackApi,
  getPeerPoolApi,
  getPeerStatusApi,
  getRequestedReviewsApi,
  getReviewFormApi,
  getReviewHelpDocumentsApi,
  getReviewHelpFAQsApi,
  getReviewHelpTimelineApi,
  getReviewProvidersApi,
  getSummaryStatsApi,
  getTeamReviewsApi,
  getUpwardStatusApi,
  nominatePeerApi,
  publishReview,
  rejectNominationApi,
  removeNominationApi,
  submitReviewApi,
  unPublishReview,
  updateQuestionResponseApi,
} from 'api/performanceReview';
import Timeline from 'models/admin/timeline';
import ColorCodedDate from 'models/common/ColorCodedDate';
import Employee, { BasicEmployee } from 'models/employee';
import HashTag from 'models/hashtag';
import Review, { ReviewForm } from 'models/performanceReview/Review';
import ReviewQuestion, { AnswerOption } from 'models/reviewQuestion';
// import Task1 from 'models/task1';

export const getBehaviorForm = ({ reviewId, employeeId, providerId, responseId }) =>
  getReviewFormApi({
    formName: REVIEW_FORMS_TYPE_MAP.COMPETENCY,
    reviewId,
    employeeId,
    providerId,
    responseId,
  }).then((res) => {
    const mappedResponse = res.data.entity.map(({ competency, questions }) => {
      const tag = new HashTag();

      tag.fromJSON(competency.orgTag);
      tag.addStatsFromJSON(competency.stats);

      return {
        tag,
        questions: questions.map((question) => ReviewQuestion.fromJSON(question)),
      };
    });

    return mappedResponse;
  });

export const getGoalForm = ({ reviewId, employeeId, providerId, responseId }) =>
  getReviewFormApi({
    formName: REVIEW_FORMS_TYPE_MAP.GOAL,
    reviewId,
    employeeId,
    providerId,
    responseId,
  }).then((res) => {
    const mappedResponse = res.data.entity.goalQuestions.map(({ goal, question }) => ({
      // goal: goal ? Task1.fromJSON(goal) : null,
      // TODO: add back when adding task functionality
      goal: null,
      // to make it consistent with the COMPETENCY response
      questions: [question].map((question) => ReviewQuestion.fromJSON(question)),
    }));
    return {
      goalQuestions: mappedResponse,
      averageGoalRating: res.data.entity.averageGoalRating,
      maxGoalRating: res.data.entity.maxGoalRating,
    };
  });

export const getQAForm = ({ reviewId, employeeId, providerId, responseId }) =>
  getReviewFormApi({
    formName: REVIEW_FORMS_TYPE_MAP.QNA,
    reviewId,
    employeeId,
    providerId,
    responseId,
  }).then((res) => res.data.entity.map((question) => ReviewQuestion.fromJSON(question)));

export const updateQuestionResponse = ({
  reviewId,
  goalId,
  competencyId,
  employeeId,
  questionId,
  feedbackText = '',
  selectedAnswerOptions = [],
}) =>
  updateQuestionResponseApi({
    reviewId,
    goalId,
    competencyId,
    employeeId,
    responseBody: {
      id: questionId,
      selectedAnswerOptions: selectedAnswerOptions.map((opt) => ({ id: opt.id })),
      feedbackText,
    },
  }).then((res) => res.data.entity);

export const getSummaryStats = ({ reviewId, employeeId, providerId }) =>
  getSummaryStatsApi({
    reviewId,
    employeeId,
    providerId,
  }).then((res) => {
    const employee = new Employee();
    employee.fromJSON(res.data.entity.employee);

    return {
      ...res.data.entity,
      review: Review.fromJSON(res.data.entity.reviewInfo),
      employee,
      reviewForms: res.data.entity.formNames.map((fn) => ReviewForm.fromJSON(fn)),
    };
  });

export const getActiveReviews = ({ limit = 5, offset = 0, includeCount = false }) =>
  getActiveReviewsApi({ limit, offset, includeCount }).then((res) => ({
    totalCount: res.data.entity.totalCount,
    reviews: res.data.entity.data.map(({ employee, review, endDateFormatted, message }) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
      message: message,
    })),
  }));

export const getArchivedReviews = ({ limit = 5, offset = 0, includeCount = false }) =>
  getArchivedReviewsApi({ limit, offset, includeCount }).then((res) => ({
    totalCount: res.data.entity.totalCount,
    reviews: res.data.entity.data.map(({ employee, review, endDateFormatted }) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
    })),
  }));

export const getTeamReviews = ({ requestedReviewCycle = null }) =>
  getTeamReviewsApi({ requestedReviewCycle }).then((res) => {
    const { membersResponse } = res.data.entity;
    const dataRow = Object.values(membersResponse).map((value) => ({
      EMPLOYEE: BasicEmployee.fromJSON(value.employee),
      feedbackFormId: value.feedbackFormId,
      ACKNOWLEDGEMENT: value.acknowledgementStatus,
      PUBLISHED: value.publishStatus,
      isClickable: value.isClickable,
      containsReview: value.containsReview,
      ...value.reviews,
    }));
    return {
      enabledStages: res.data.entity.enabledStages,
      totalCount: res.data.entity.totalCount,
      reviewCycleId: res.data.entity.reviewCycleId,
      membersResponse: dataRow,
    };
  });

export const getRequestedReviews = ({ limit = 500, offset = 0, includeCount = false }) =>
  getRequestedReviewsApi({ limit, offset, includeCount }).then((res) => ({
    totalCount: res.data.entity.totalCount,
    reviews: res.data.entity.data.map(({ employee, review, endDateFormatted }) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
    })),
  }));

export const getPeerFeedback = ({ goalId, competencyId, questionId, reviewId, employeeId }) =>
  getPeerFeedbackApi({
    goalId,
    competencyId,
    questionId,
    reviewId,
    employeeId,
  }).then((res) =>
    res.data.entity.map((feedback) => ({
      employee: BasicEmployee.fromJSON(feedback.employee),
      selectedAnswerOptions: feedback.selectedAnswerOptions.map((opt) => AnswerOption.fromJSON(opt)),
      feedbackText: feedback.feedbackText,
      providerType: feedback.providerType,
    })),
  );

export const submitReview = ({ reviewId, employeeId }) =>
  submitReviewApi({ reviewId, employeeId }).then((res) => ({
    reviewForms: res.data.entity.formNames.map((fn) => ReviewForm.fromJSON(fn)),
    review: Review.fromJSON(res.data.entity.response),
    message: res.data.message,
  }));

export const getReviewProviders = ({ reviewId, employeeId }) =>
  getReviewProvidersApi({ reviewId, employeeId }).then((res) =>
    res.data.entity.map(({ employee, review, endDateFormatted }) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: employee ? BasicEmployee.fromJSON(employee) : null,
      review: Review.fromJSON(review),
    })),
  );

export const acknowledgeReview = ({ reviewId, providerId }) =>
  acknowledgeReviewApi({ reviewId, providerId }).then((res) => res.data.entity);

/*
    Using SummaryStatsApi for getting updated status of reviewForms.
  */
export const getUpdatedReviewForms = ({ reviewId, employeeId }) =>
  getSummaryStatsApi({
    reviewId,
    employeeId,
  }).then((res) => res.data.entity.formNames.map((fn) => ReviewForm.fromJSON(fn)));

/*
    Peer review
  */
export const getNominatedPeers = ({ reviewId, empId }) =>
  getNominatedPeersApi({
    reviewId,
    empId,
  }).then((res) => res.data.entity);

export const getPeerPool = ({ reviewId, empId }) =>
  getPeerPoolApi({
    reviewId,
    empId,
  }).then((res) => {
    if (!res.data.entity) {
      return null;
    }
    return res.data.entity;
  });

export const nominatePeer = ({ reviewId, employees, empId }) =>
  nominatePeerApi({
    reviewId,
    employees,
    empId,
  }).then((res) => res);

export const removeNomination = ({ reviewId, employee }) =>
  removeNominationApi({
    reviewId,
    employee: { employee: { id: employee.id } },
  }).then((res) => res);

export const acceptNomination = ({ reviewId, employeeId }) =>
  acceptNominationApi({ reviewId, employeeId }).then((res) => res);

export const rejectNomination = ({ reviewId, employeeId }) =>
  rejectNominationApi({ reviewId, employeeId }).then((res) => res);

export const getPeerStatus = () =>
  getPeerStatusApi().then((res) =>
    res.data.entity.map(({ employee, review, endDateFormatted }) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
    })),
  );

export const getUpwardStatus = () =>
  getUpwardStatusApi().then((res) =>
    res.data.entity.map(({ employee, review, endDateFormatted }) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
    })),
  );

export const getEmployeeCohort = ({ reviewId, body }) =>
  getEmployeeCohortApi({ reviewId, body }).then((res) => res.data.entity);

export const getActiveReviewsCount = () => getActiveReviewsCountApi().then((res) => res.data.entity);

export const getPastFeedbacks = ({ offset = 0, limit = 10, includeCount = false, receiverEmployeeId }) =>
  getPastFeedbacksApi({ offset, limit, includeCount, receiverEmployeeId }).then((res) => ({
    totalCount: res.data.entity.totalCount,
    reviews: res.data.entity.data.map(({ employee, review, endDateFormatted, message }) => ({
      endDateFormatted: endDateFormatted && ColorCodedDate.fromJSON(endDateFormatted),
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
      message,
    })),
  }));

export const getReviewHelpDocuments = ({ reviewId }) =>
  getReviewHelpDocumentsApi({ reviewId }).then((res) => res.data.entity);

export const getReviewHelpFAQs = ({ reviewId }) => getReviewHelpFAQsApi({ reviewId }).then((res) => res.data.entity);

export const getReviewHelpTimeline = ({ reviewId }) =>
  getReviewHelpTimelineApi({ reviewId }).then((res) =>
    res.data.entity.map((json) => {
      const timeline = new Timeline();
      timeline.fromJSON(json);
      return timeline;
    }),
  );

export const publishUnpublishReviews = ({ reviewCycleId, empId, type }) => {
  if (type === 'PUBLISH') return publishReview({ reviewCycleId, empId }).then((res) => res.data.entity);
  else return unPublishReview({ reviewCycleId, empId }).then((res) => res.data.entity);
};
