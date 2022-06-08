import Textarea from 'uiToolkit/Textarea';

export const QuestionComp = ({ questionText }: { questionText: string }) => (
  <Textarea name="question-text" label="Question" value={questionText} isDisabled />
);
