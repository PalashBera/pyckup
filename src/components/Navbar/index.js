import logo from '../../images/logo.png';
import './index.scss';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <a className='navbar-brand' href='/'>
        <img src={logo} width='170' height='30' alt='logo' loading='lazy' />
      </a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='/'>Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
