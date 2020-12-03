import { useState } from 'react';
import RegistrationCard from '../RegistrationCard';
import Textbox from '../Textbox';
import SubmitButton from '../SubmitButton';
import signupFormValidator from '../../validators/signupFormValidator';

function SignupForm({ toggleLoginForm }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const isValid = () => {
    const { errors, isValid } = signupFormValidator({ firstName, lastName, email, password, passwordConfirmation, companyName });
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
      console.log('Form has been submitted successfully.');
    }
  }

  return (
    <RegistrationCard>
      <h3>Create Your Account</h3>

      <form className='registrationForm'>
        <Textbox
          fieldName='first_name'
          value={firstName}
          label='First Name'
          error={errors.firstName}
          type='text'
          id='firstName'
          onChange={e => setFirstName(e.target.value)}
          autoComplete='off'
          autoFocus={true}
          placeHolder='Your first name'
        />

        <Textbox
          fieldName='last_name'
          value={lastName}
          label='Last Name'
          error={errors.lastName}
          type='text'
          id='lastName'
          onChange={e => setLastName(e.target.value)}
          autoComplete='off'
          placeHolder='Your last name'
        />

        <Textbox
          fieldName='email'
          value={email}
          label='Email Address'
          error={errors.email}
          type='email'
          id='emailAddress'
          onChange={e => setEmail(e.target.value)}
          autoComplete='off'
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

      <p className='formText'>Already have an account? <span className='formLink' onClick={toggleLoginForm}>Login</span></p>
    </RegistrationCard>
  )
}

export default SignupForm;
