import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

import './loginPage.scss';

function LoginPage() {
  const [loginForm, setLoginForm] = useState(true);
  const currentUser = useSelector(state => state.authReducer.currentUser);

  if (currentUser) {
    return <Redirect to='/dashboard' />;
  }

  const toggleLoginForm = () => setLoginForm(!loginForm);

  const FormContent = loginForm ? <LoginForm toggleLoginForm={toggleLoginForm} /> : <SignupForm toggleLoginForm={toggleLoginForm} />

  return (
    <div className='loginPage'>
      <section className='asideSection'>
        <div className='header'>
          <Link to='/'>
            <img src={logo} width='225' height='48' alt='logo' loading='lazy' />
          </Link>

          <h3>
            Welcome to SupplyPlex<br/>Discover Amazing Inventory
          </h3>
        </div>

        <div className='asideImage'></div>
      </section>

      <section className='formSection'>
        {FormContent}

        <div className='formFooter'>
          <div className='copyRight'>
            2020&nbsp;&#169;&nbsp;<Link to='/'>NovaTeam</Link>
          </div>

          <div className='links'>
            <Link to='/'>Terms</Link>
            <Link to='/'>Plans</Link>
            <Link to='/'>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage;
