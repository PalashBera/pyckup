import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Textbox from '../Textbox';
import SubmitButton from '../SubmitButton';
import loginFormValidator from '../../validators/loginFormValidator';
import { requestLogin } from '../../actions/authAction';
import FormError from '../FormError';

import './loginForm.scss';

function LoginForm({ toggleLoginForm }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const loginErrors = useSelector(store => store.authReducer.errors);

  useEffect(() => {
    setIsLoading(false);
  }, [loginErrors])

  const isValid = () => {
    const { errors, isValid } = loginFormValidator({ email, password });
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
      dispatch(requestLogin({ email, password }));
    }
  }

  return (
    <div className='formContent'>
      <div className='header'>
        <h3>Welcome to SupplyPlex</h3>
        <p className='formText'>New Here? <span className='formLink' onClick={toggleLoginForm}>Create an Account</span></p>
      </div>

      <form className='registrationForm'>
        {loginErrors && <FormError errors={loginErrors} />}

        <Textbox
          fieldName='email'
          value={email}
          label='Email Address'
          error={errors.email}
          type='email'
          id='emailAddress'
          onChange={e => setEmail(e.target.value)}
          autoComplete='off'
          autoFocus={true}
          placeHolder='Your email address'
        />

        <Textbox
          fieldName='password'
          value={password}
          label='Password'
          error={errors.password}
          type='password'
          id='password'
          onChange={e => setPassword(e.target.value)}
          autoComplete='off'
          placeHolder='Your password'
        />

        <SubmitButton
          buttonText='Login'
          disabled={isLoading}
          handleClick={onSubmit}
        />
      </form>
    </div>
  )
}

export default LoginForm;
