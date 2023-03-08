import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonList>
        {options.map(option => {
          return (
            <li key={option}>
              <Button type="button" value={option} onClick={onLeaveFeedback}>
                {option}
              </Button>
            </li>
          );
        })}
      </ButtonList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
