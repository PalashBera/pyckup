import PropTypes from 'prop-types';

import './pageHeader.scss';

function PageHeader({ title, totalCount }) {
  return (
    <div className='pageHeader'>
      <h1 className='header'>{title}</h1>

      {totalCount &&
        <span className='totalCount'>{totalCount} Total</span>
      }
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  totalCount: PropTypes.number
}

PageHeader.defaultProps = {
  title: 'Demo Header'
}

export default PageHeader;
