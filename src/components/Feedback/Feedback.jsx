import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { FeedbackContainer } from './Feedback.styled';

import { useState } from 'react';

export default function Feedback() {
  const [good, setCounterGood] = useState(0);
  const [neutral, setCounterNeutral] = useState(0);
  const [bad, setCounterBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrement = event => {
    switch (event.target.value) {
      case 'good':
        setCounterGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setCounterNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setCounterBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / countTotalFeedback());
  };

  return (
    <>
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </FeedbackContainer>
    </>
  );
}
