import RegistrationCard from '../RegistrationCard';
import Textbox from '../Textbox';
import SubmitButton from '../SubmitButton';

import './index.scss';

function LoginForm({ toggleLoginForm }) {
  return (
    <RegistrationCard>
      <h3>Welcome back</h3>

      <form className='registrationForm'>
        <Textbox
          fieldName='email'
          value=''
          label='Email Address'
          error=''
          type='text'
          id='emailAddress'
          onChange={() => 'abc'}
          autoComplete='off'
          autoFocus={true}
          placeHolder='Your email address'
        />

        <Textbox
          fieldName='password'
          value=''
          label='Password'
          error=''
          type='password'
          id='password'
          onChange={() => 'abc'}
          autoComplete='off'
          placeHolder='Your password'
        />

        <SubmitButton
          value='Login'
          disabled={false}
          handleClick={() => 'abc'}
        />
      </form>

      <p className='formText'>Don't have an account? <span className='formLink' onClick={toggleLoginForm}>Signup</span></p>
    </RegistrationCard>
  )
}

export default LoginForm;
