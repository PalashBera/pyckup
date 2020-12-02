import { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

function LoginPage() {
  const [loginForm, setLoginForm] = useState(true);
  const toggleLoginForm = () => setLoginForm(!loginForm);

  return (
    loginForm ? <LoginForm toggleLoginForm={toggleLoginForm} /> : <SignupForm toggleLoginForm={toggleLoginForm} />
  )
}

export default LoginPage;
