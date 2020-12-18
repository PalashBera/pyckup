import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Textbox from '../../components/Textbox';
import SubmitButton from '../../components/SubmitButton';
import signupFormValidator from '../../validators/signupFormValidator';
import { requestSignup } from '../../actions/authAction';
import FormError from '../../components/FormError';

import './loginForm.scss';

function SignupForm({ toggleLoginForm }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const signupErrors = useSelector(store => store.authReducer.errors);

  useEffect(() => {
    setIsLoading(false);
  }, [signupErrors])

  const isValid = () => {
    const { errors, isValid } = signupFormValidator({ email, password, passwordConfirmation, companyName });
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
      dispatch(requestSignup({ email, password, passwordConfirmation, companyName }));
    }
  }

  return (
    <div className='formContent'>
      <div className='header'>
        <h3>Create New Account</h3>
        <p className='formText'>Already have an account? <span className='formLink' onClick={toggleLoginForm}>Login</span></p>
      </div>

      <form className='registrationForm'>
        {signupErrors && <FormError errors={signupErrors} />}

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

        <Textbox
          fieldName='password_confirmation'
          value={passwordConfirmation}
          label='Password Confirmation'
          error={errors.passwordConfirmation}
          type='password'
          id='passwordConfirmation'
          onChange={e => setPasswordConfirmation(e.target.value)}
          autoComplete='off'
          placeHolder='Your password again'
        />

        <Textbox
          fieldName='company_name'
          value={companyName}
          label='Company Name'
          error={errors.companyName}
          type='text'
          id='companyName'
          onChange={e => setCompanyName(e.target.value)}
          autoComplete='off'
          placeHolder='Your company name'
        />

        <SubmitButton
          buttonText='Signup'
          disabled={isLoading}
          handleClick={onSubmit}
        />
      </form>
    </div>
  )
}

export default SignupForm;
