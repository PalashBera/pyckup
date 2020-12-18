import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

function Button({ title, url, disabled }) {
  return (
    <Link className={classnames('button', { 'disabled': disabled })} to={url}>{title}</Link>
  )
}

Button.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  url: '/',
  title: 'Button'
}

export default Button;
