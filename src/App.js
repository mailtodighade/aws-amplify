import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className='App'>
      <AmplifySignOut />
      <div>Hello, {user.username}</div>
      <AddTodo />
      <ListTodo />
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthStateApp;
