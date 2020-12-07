import PropTypes from 'prop-types';

import './submitButton.scss';

function SubmitButton({ buttonText, handleClick, disabled }) {
  return (
    <input
      onClick={handleClick}
      value={buttonText}
      type='submit'
      className='submitButton'
      disabled={disabled}
    />
  )
}

SubmitButton.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

SubmitButton.defaultProps = {
  buttonText: 'submit',
  disabled: false
}

export default SubmitButton;
