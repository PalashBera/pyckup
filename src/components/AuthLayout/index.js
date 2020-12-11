import MobileNavbar from '../MobileNavbar';

import './authLayout.scss';

function AuthLayout({ children }) {
  return (
    <div className='authLayout'>
      <MobileNavbar />
      <main>{children}</main>
    </div>
  )
}

export default AuthLayout;
