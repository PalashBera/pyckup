import classnames from 'classnames';
import { Link } from 'react-router-dom';
import navLinkLogo from '../../images/navLinkLogo.svg';

import './sidebar.scss';

function Sidebar({ show, toggleShow }) {
  return (
    <div className={classnames('sidebar', { 'showSidebar': show })}>
      <div className='navList'>
        <Link className='navItem' to='/dashboard' onClick={toggleShow}>
          <span className='itemIconContainer'>
            <img src={navLinkLogo} width='20' height='20' alt='logo' loading='lazy' />
          </span>

          <span className='itemTitle'>Dashboard</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;
