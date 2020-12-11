import { useState } from 'react';
import MobileNavbar from '../MobileNavbar';
import BackDrop from '../BackDrop';

import './authLayout.scss';

function AuthLayout({ children }) {
  const [showBackDrop, setShowBackDrop] = useState(false);

  const toggleBackDrop = () => setShowBackDrop(!showBackDrop);

  if (typeof window !== 'undefined') {
    if (showBackDrop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <div className='authLayout'>
      <MobileNavbar toggleBackDrop={toggleBackDrop} />
      <main>{children}</main>
      <BackDrop showBackDrop={showBackDrop} toggleBackDrop={toggleBackDrop} />
    </div>
  )
}

export default AuthLayout;
