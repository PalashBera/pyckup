import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegistrationCard from '../RegistrationCard';
import Textbox from '../Textbox';
import SubmitButton from '../SubmitButton';
import loginFormValidator from '../../validators/loginFormValidator';
import { requestLogin } from '../../actions/loginAction';

function LoginForm({ toggleLoginForm }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const loginErrors = useSelector(store => store.loginReducer.errors);

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
    <RegistrationCard>
      <h3>Welcome back</h3>

      <form className='registrationForm'>
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

      <p className='formText'>Don't have an account? <span className='formLink' onClick={toggleLoginForm}>Signup</span></p>
    </RegistrationCard>
  )
}

export default LoginForm;
