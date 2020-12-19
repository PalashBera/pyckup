import PropTypes from 'prop-types';
import classnames from 'classnames';

import './selectbox.scss';

function Selectbox({ fieldName, value, label, error, id, onChange, placeHolder, options }) {
  const selectOptions = options.map(el => <option value={el.id} key={el.id.toString()}>{el.name}</option>)
  const propmtOption = <option value='' key='prompt'>{placeHolder}</option>
  const optionList = [propmtOption, ...selectOptions]

  return (
    <div className={classnames('formGroup', { 'hasError': error })}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        onChange={onChange}
        name={fieldName}
        className='formControl'
        defaultValue={value}
      >
        {optionList}
      </select>
      {error && <small className='errorText'>{error}</small>}
    </div>);
}

Selectbox.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  options: PropTypes.array.isRequired
}

Selectbox.defaultProps = {
  placeHolder: 'Select one option',
  options: [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ]
}

export default Selectbox;
