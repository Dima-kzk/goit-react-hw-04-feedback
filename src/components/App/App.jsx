import { useState } from 'react';
import { Сentralizer } from './App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const step = 1;

  const buttonHandler = e => {
    const option = e.target.textContent;
    switch (option) {
      case 'good':
        setGood(good + step);
        break;
      case 'neutral':
        setNeutral(neutral + step);
        break;
      case 'bad':
        setBad(bad + step);
        break;
      default:
        break;
    }
  };

  const total = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return total() ? Math.round((good / total()) * 100) : 0;
  };

  return (
    <Сentralizer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={buttonHandler}
        />
      </Section>
      <Section title="Statistics">
        {total() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Сentralizer>
  );
};
