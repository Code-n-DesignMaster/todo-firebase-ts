import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../common/FirebaseAuthProvider';
import routes from './routes';

const UnPrivateRoute = ({ ...rest }) => {
  const { signedIn } = useContext(AuthContext);

  if (signedIn) {
    return <Redirect to={routes.projects} />;
  }
  return <Route {...rest} />;
};

export default UnPrivateRoute;
