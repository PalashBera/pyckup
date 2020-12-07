import PropTypes from 'prop-types';
import classnames from 'classnames';

import './textbox.scss';

function Textbox({ fieldName, value, label, error, type, id, onChange, autoComplete, autoFocus, placeHolder }) {
  return (
    <div className={classnames('formGroup', { 'hasError': error })}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        name={fieldName}
        className='formControl'
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        placeholder={placeHolder}
      />
      {error && <small className='errorText'>{error}</small>}
    </div>);
}

Textbox.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeHolder: PropTypes.string
}

Textbox.defaultProps = {
  type: 'text',
  autoComplete: 'off',
  autoFocus: false,
  placeHolder: 'Your text...'
}

export default Textbox;
