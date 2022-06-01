// @ts-nocheck
import ColorCodedDate from 'models/common/ColorCodedDate';

export default class Review {
  constructor({
    id,
    receiverEmployeeId,
    providerType,
    providerEmployeeId,
    submissionStatus,
    feedbackForm,
    peerStatus,
    summaryFilePath,
    responseType,
    feedbackType,
    submissionDateFormatted,
    requestedDateFormatted,
    isPublished,
  }) {
    this.id = id;
    this.receiverEmployeeId = receiverEmployeeId;
    this.providerType = providerType;
    this.providerEmployeeId = providerEmployeeId;
    this.submissionStatus = submissionStatus;
    this.feedbackForm = feedbackForm;
    this.peerStatus = peerStatus;
    this.summaryFilePath = summaryFilePath;
    this.responseType = responseType;
    this.feedbackType = feedbackType;
    this.submissionDateFormatted = submissionDateFormatted;
    this.requestedDateFormatted = requestedDateFormatted;
    this.isPublished = isPublished;
  }

  static fromJSON({
    id,
    receiverEmployeeId,
    providerType,
    providerEmployeeId,
    submissionStatus,
    feedbackForm,
    peerStatus,
    summaryFilePath,
    responseType,
    feedbackType,
    submissionDateFormatted,
    requestedDateFormatted,
    isPublished,
  }) {
    return new Review({
      id,
      receiverEmployeeId,
      providerType,
      providerEmployeeId,
      submissionStatus,
      feedbackForm: feedbackForm ? FeedbackForm.fromJSON(feedbackForm) : null,
      peerStatus,
      summaryFilePath,
      responseType,
      feedbackType,
      submissionDateFormatted: submissionDateFormatted && ColorCodedDate.fromJSON(submissionDateFormatted),
      requestedDateFormatted: requestedDateFormatted && ColorCodedDate.fromJSON(requestedDateFormatted),
      isPublished: isPublished,
    });
  }
}

class FeedbackForm {
  constructor({ currentStage, id, name, reviewCycle }) {
    this.id = id;
    this.name = name;
    this.currentStage = currentStage;
    this.reviewCycle = reviewCycle;
  }

  static fromJSON({ id, name, currentStage, reviewCycle }) {
    return new FeedbackForm({
      id,
      name,
      currentStage,
      reviewCycle: reviewCycle ? ReviewCycle.fromJSON(reviewCycle) : null,
    });
  }
}

class ReviewCycle {
  constructor({ id, name }) {
    this.name = name;
    this.id = id;
  }

  static fromJSON({ id, name }) {
    return new ReviewCycle({
      id,
      name,
    });
  }
}

export class ReviewForm {
  constructor({ formName, status, totalQuestions, unansweredQuestions }) {
    this.formName = formName;
    this.status = status;
    this.totalQuestions = totalQuestions;
    this.unansweredQuestions = unansweredQuestions;
  }

  static fromJSON({ formName, status, totalQuestions, unansweredQuestions }) {
    return new ReviewForm({
      formName,
      status,
      totalQuestions,
      unansweredQuestions,
    });
  }
}
