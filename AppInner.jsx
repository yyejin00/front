import * as React from 'react';
import MainStack from './navigation/MainStack';
import LoginOut from './navigation/LoginOut';
import {useSelector} from 'react-redux';

function AppInner() {
  //const [isLoggedIn, setLoggedIn] = useState(true);
  const isLoggedIn = useSelector(state => !state.user.email);

  return isLoggedIn ? <MainStack /> : <LoginOut />;
}

export default AppInner;
