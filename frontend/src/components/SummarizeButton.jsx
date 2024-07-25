// src/components/SummarizeButton.jsx
import PropTypes from 'prop-types';


const SummarizeButton = ({ onSummarize }) => {
  return (
    <button className="summarize-button" onClick={onSummarize}>
      Summarize Content
    </button>
  );
};

SummarizeButton.propTypes = {
  onSummarize: PropTypes.func.isRequired,
};

export default SummarizeButton;
