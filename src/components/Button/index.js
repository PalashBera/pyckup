import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonGroup from './buttonGroup';

import './button.scss';

function Button({ title, url, disabled, formButton }) {
  return (
    <Link className={classnames('button', { 'disabled': disabled }, { 'formButton': formButton })} to={url}>{title}</Link>
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

export {
  ButtonGroup,
  Button
};
