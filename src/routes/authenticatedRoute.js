
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthLayout from '../components/AuthLayout';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector(state => state.authReducer.currentUser);

  return (
    <Route
      {...rest}
      render={(props) => (
        currentUser ? (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
      )}
    />
  )
}

export default AuthenticatedRoute;
