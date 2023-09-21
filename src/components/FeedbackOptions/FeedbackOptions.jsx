import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => (
        <Button key={index} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </>
  );
};
