import { useDispatch } from 'react-redux';
import { getToken } from './helpers/localStorage';
import { requestAuth } from './actions/authAction';
import Routes from './routes';

function App() {
  const dispatch = useDispatch();
  const jwtToken = getToken('jwtToken');

  if (jwtToken) {
    dispatch(requestAuth());
  }

  return (
    <>
      {Routes}
    </>
  );
}

export default App;
