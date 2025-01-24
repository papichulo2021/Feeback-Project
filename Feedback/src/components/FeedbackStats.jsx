import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  // Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / feedback.length;

  // Replace .0 if the average is a whole number
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// Correct the typo by using lowercase `propTypes`
FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
