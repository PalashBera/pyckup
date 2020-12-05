import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.scss';

function FormError({ errors }) {
  const errorList = errors.map((error, index) => {
    return <p key={index.toString()} className={classnames('errorMessage', { 'noMargin': index === 0 })}>{error.message}</p>
  })

  if (!errors.length) {
    return null;
  }

  return (
    <div className='errroContainer'>
      {errorList}
    </div>
  );
}

FormError.propTypes = {
  errors: PropTypes.array.isRequired
}

FormError.defaultProps = {
  errors: []
}

export default FormError;
