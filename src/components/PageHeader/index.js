import PropTypes from 'prop-types';
import Button from '../Button';

import './pageHeader.scss';

function PageHeader({ title, totalCount, buttonTitle, buttonLink, buttonDisabled }) {
  return (
    <div className='pageHeader'>
      <div className='leftContent'>
        <h1 className='header'>{title}</h1>

        {totalCount &&
          <span className='totalCount'>{totalCount} Total</span>
        }
      </div>

      { buttonLink &&
        <Button
          title={buttonTitle}
          url={buttonLink}
          disabled={buttonDisabled}
        />
      }
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  totalCount: PropTypes.number,
  buttonTitle: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonDisabled: PropTypes.bool
}

PageHeader.defaultProps = {
  title: 'Demo Header'
}

export default PageHeader;
