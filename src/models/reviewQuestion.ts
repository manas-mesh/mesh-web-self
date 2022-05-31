import { TEAM_TYPE } from 'constants/ProjectConstants';

export default class ReviewQuestion {
  constructor({
    id,
    description,
    answerType,
    questionType,
    competencyId,
    enableFeedbackText,
    answerOptions,
    selectedAnswerOptions,
    feedbackText,
    isTextRequired,
    multiSelect,
    isScoreMandatory,
    minOptions,
    maxOptions,
    tagId,
    allowRange,
    isArchived,
    isRequired,
    analyticsQuestionType,
    tag,
  }) {
    this.id = id;
    this.description = description;
    this.answerType = answerType;
    this.questionType = questionType;
    this.competencyId = competencyId;
    this.enableFeedbackText = enableFeedbackText;
    this.answerOptions = answerOptions;
    this.selectedAnswerOptions = selectedAnswerOptions;
    this.feedbackText = feedbackText;
    this.isTextRequired = isTextRequired;
    this.multiSelect = multiSelect;
    this.isScoreMandatory = analyticsQuestionType === 'RATING';
    this.minOptions = minOptions;
    this.maxOptions = maxOptions;
    this.tagId = tagId || '';
    this.allowRange = allowRange;
    this.isArchived = isArchived;
    this.isRequired = isRequired;
    this.analyticsQuestionType = analyticsQuestionType;
    this.tag = tag;
  }

  static fromJSON({
    id,
    description = '',
    answerType,
    questionType,
    competencyId,
    enableFeedbackText,
    answerOptions,
    selectedAnswerOptions,
    feedbackText,
    isTextRequired,
    minOptions,
    maxOptions,
    tag,
    isArchived,
    isRequired,
    analyticsQuestionType,
  }) {
    let _answerOptions = [];
    if (answerOptions) _answerOptions = answerOptions.map((opt) => AnswerOption.fromJSON(opt));

    let _selectedAnswerOptions = [];
    if (selectedAnswerOptions) _selectedAnswerOptions = selectedAnswerOptions.map((opt) => AnswerOption.fromJSON(opt));

    return new ReviewQuestion({
      id,
      description,
      answerType: answerType === 'MULTI_SELECT' ? 'MULTI_SELECT' : answerType === 'SHORT_TEXT' ? 'NONE' : answerType,
      questionType,
      competencyId,
      enableFeedbackText: enableFeedbackText || false,
      answerOptions: _answerOptions,
      selectedAnswerOptions: _selectedAnswerOptions,
      feedbackText: feedbackText || '',
      isTextRequired: isTextRequired || false,
      multiSelect: answerType === 'MULTI_SELECT',
      isScoreMandatory: minOptions,
      maxOptions: maxOptions || answerOptions?.length,
      minOptions: minOptions || (isRequired ? 1 : 0),
      tagId: tag ? tag.uuid : null,
      allowRange: minOptions !== null || maxOptions !== null,
      isArchived: isArchived || false,
      isRequired,
      analyticsQuestionType: analyticsQuestionType || null,
      tag: tag,
    });
  }
}

export class AnswerOption {
  constructor({ id, description, score, displayOrder }) {
    this.id = id;
    this.description = description;
    this.score = score;
    this.displayOrder = displayOrder;
  }

  static fromJSON({ id, description = '', score, displayOrder }) {
    return new AnswerOption({
      id,
      description,
      score,
      displayOrder,
    });
  }
}
