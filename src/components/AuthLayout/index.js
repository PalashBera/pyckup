import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import classnames from 'classnames';
import MobileNavbar from '../MobileNavbar';
import BackDrop from '../BackDrop';
import Sidebar from '../Sidebar';

import './authLayout.scss';

function AuthLayout({ children }) {
  const windowWidth = useWindowWidth();
  const [showBackDrop, setShowBackDrop] = useState(false);

  const toggleBackDrop = () => setShowBackDrop(!showBackDrop);

  if (typeof window !== 'undefined') {
    if (showBackDrop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  const desktopScreen = windowWidth >= 992;

  return (
    <div className='authLayout'>
      {!desktopScreen &&
        <MobileNavbar toggleBackDrop={toggleBackDrop} />
      }

      <Sidebar show={showBackDrop} toggleShow={toggleBackDrop} desktopScreen={desktopScreen} />
      <main className={classnames({ 'desktopMain': desktopScreen })}>{children}</main>

      <BackDrop showBackDrop={showBackDrop} toggleBackDrop={toggleBackDrop} />
    </div>
  )
}

export default AuthLayout;
