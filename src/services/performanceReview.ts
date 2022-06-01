import { REVIEW_FORMS_TYPE_MAP } from '@constants/reviewConstants';
import {
  getActiveReviewsApi,
  getActiveReviewsCountApi,
  getArchivedReviewsApi,
  getPeerFeedbackApi,
  getRequestedReviewsApi,
  getReviewFormApi,
  getSummaryStatsApi,
  submitReviewApi,
  updateQuestionResponseApi,
} from 'api/performanceReview';
import ColorCodedDate from 'models/common/ColorCodedDate';
import Employee, { BasicEmployee } from 'models/employee';
import HashTag from 'models/hashtag';
import Review, { ReviewForm } from 'models/performanceReview/Review';
import ReviewQuestion, { AnswerOption } from 'models/reviewQuestion';

export const getBehaviorForm = ({
  reviewId,
  employeeId,
  providerId,
  responseId,
}: {
  reviewId: string;
  employeeId: string;
  providerId: string;
  responseId: string;
}) =>
  getReviewFormApi({
    formName: REVIEW_FORMS_TYPE_MAP.COMPETENCY,
    reviewId,
    employeeId,
    providerId,
    responseId,
  }).then((res: any) => {
    const mappedResponse = res.data.entity.map(({ competency, questions }: any) => {
      const tag = new HashTag();

      tag.fromJSON(competency.orgTag);
      tag.addStatsFromJSON(competency.stats);

      return {
        tag,
        questions: questions.map((question: any) => ReviewQuestion.fromJSON(question)),
      };
    });

    return mappedResponse;
  });

export const getGoalForm = ({
  reviewId,
  employeeId,
  providerId,
  responseId,
}: {
  reviewId: string;
  employeeId: string;
  providerId: string;
  responseId: string;
}) =>
  getReviewFormApi({
    formName: REVIEW_FORMS_TYPE_MAP.GOAL,
    reviewId,
    employeeId,
    providerId,
    responseId,
  }).then((res: any) => {
    const mappedResponse = res.data.entity.goalQuestions.map(({ goal, question }: any) => ({
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

export const getQAForm = ({
  reviewId,
  employeeId,
  providerId,
  responseId,
}: {
  reviewId: string;
  employeeId: string;
  providerId: string;
  responseId: string;
}) =>
  getReviewFormApi({
    formName: REVIEW_FORMS_TYPE_MAP.QNA,
    reviewId,
    employeeId,
    providerId,
    responseId,
  }).then((res: any) => res.data.entity.map((question: any) => ReviewQuestion.fromJSON(question)));

export const updateQuestionResponse = ({
  reviewId,
  goalId,
  competencyId,
  employeeId,
  questionId,
  feedbackText = '',
  selectedAnswerOptions = [],
}: {
  reviewId: string;
  employeeId: string;
  providerId: string;
  responseId: string;
  goalId: string;
  competencyId: string;
  questionId: string;
  feedbackText: string;
  selectedAnswerOptions: any[];
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
  }).then((res: any) => res.data.entity);

export const getSummaryStats = ({
  reviewId,
  employeeId,
  providerId,
}: {
  reviewId: string;
  employeeId: string;
  providerId: string;
}) =>
  getSummaryStatsApi({
    reviewId,
    employeeId,
    providerId,
  }).then((res: any) => {
    const employee = new Employee({}, {});
    employee.fromJSON(res.data.entity.employee);

    return {
      ...res.data.entity,
      review: Review.fromJSON(res.data.entity.reviewInfo),
      employee,
      reviewForms: res.data.entity.formNames.map((fn: any) => ReviewForm.fromJSON(fn)),
    };
  });

export const getActiveReviews = ({ limit = 5, offset = 0, includeCount = false }) =>
  getActiveReviewsApi({ limit, offset, includeCount }).then((res: any) => ({
    totalCount: res.data.entity.totalCount,
    reviews: res.data.entity.data.map(({ employee, review, endDateFormatted, message }: any) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
      message: message,
    })),
  }));

export const getArchivedReviews = ({ limit = 5, offset = 0, includeCount = false }) =>
  getArchivedReviewsApi({ limit, offset, includeCount }).then((res: any) => ({
    totalCount: res.data.entity.totalCount,
    reviews: res.data.entity.data.map(({ employee, review, endDateFormatted }: any) => ({
      endDateFormatted: endDateFormatted ? ColorCodedDate.fromJSON(endDateFormatted) : null,
      employee: BasicEmployee.fromJSON(employee),
      review: Review.fromJSON(review),
    })),
  }));

export const getPeerFeedback = ({
  goalId,
  competencyId,
  questionId,
  reviewId,
  employeeId,
}: {
  reviewId: string;
  employeeId: string;
  goalId: string;
  competencyId: string;
  questionId: string;
}) =>
  getPeerFeedbackApi({
    goalId,
    competencyId,
    questionId,
    reviewId,
    employeeId,
  }).then((res: any) =>
    res.data.entity.map((feedback: any) => ({
      employee: BasicEmployee.fromJSON(feedback.employee),
      selectedAnswerOptions: feedback.selectedAnswerOptions.map((opt: any) => AnswerOption.fromJSON(opt)),
      feedbackText: feedback.feedbackText,
      providerType: feedback.providerType,
    })),
  );

export const submitReview = ({ reviewId, employeeId }: { reviewId: string; employeeId: string }) =>
  submitReviewApi({ reviewId, employeeId }).then((res: any) => ({
    reviewForms: res.data.entity.formNames.map((fn: any) => ReviewForm.fromJSON(fn)),
    review: Review.fromJSON(res.data.entity.response),
    message: res.data.message,
  }));

/*
    Using SummaryStatsApi for getting updated status of reviewForms.
  */
export const getUpdatedReviewForms = ({ reviewId, employeeId }: { reviewId: string; employeeId: string }) =>
  getSummaryStatsApi({
    reviewId,
    employeeId,
  }).then((res: any) => res.data.entity.formNames.map((fn: any) => ReviewForm.fromJSON(fn)));

export const getActiveReviewsCount = () => getActiveReviewsCountApi().then((res: any) => res.data.entity);
