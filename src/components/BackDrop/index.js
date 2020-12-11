import PropTypes from 'prop-types';
import classnames from 'classnames';

import './backDrop.scss';

function BackDrop({ showBackDrop, toggleBackDrop }) {
  return (
    <div className={classnames('backDrop', { 'hide': !showBackDrop })} onClick={toggleBackDrop}>
    </div>
  )
}

BackDrop.propTypes = {
  showBackDrop: PropTypes.bool,
  toggleBackDrop: PropTypes.func.isRequired
}

BackDrop.defaultProps = {
  showBackDrop: false
}

export default BackDrop;
