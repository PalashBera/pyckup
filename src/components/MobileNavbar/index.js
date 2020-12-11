import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import './mobileNavbar.scss';

function MobileNavbar() {
  return (
    <div className='mobileNavbar'>
      <Link className='brandIcon' to='/dashboard'>
        <img src={logo} width='140' height='30' alt='logo' loading='lazy' />
      </Link>

      <div className='hamburgerIcon'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default MobileNavbar;
