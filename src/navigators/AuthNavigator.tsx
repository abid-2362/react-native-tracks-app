import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen.tsx';
import SignupScreen from '../screens/SignupScreen.tsx';

const AuthStack = createNativeStackNavigator();

interface IAuthNavigatorProps {}

const AuthNavigator = ({}: IAuthNavigatorProps) => (
  <AuthStack.Group>
    <AuthStack.Screen name={'Signin'} component={SignInScreen} />
    <AuthStack.Screen name={'Signup'} component={SignupScreen} />
  </AuthStack.Group>
);

export default AuthNavigator;
