import PropTypes from 'prop-types';

import './form.scss';

function Form({ title, children }) {
  return (
    <div className='formContainer'>
      <div className='formHeader'>
        <h3 className='formTitle'>{title}</h3>
      </div>

      <div className='formBody'>
        <form>
          {children}
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired
}

Form.defaultProps = {
  title: 'Demo Form'
}

export default Form;
