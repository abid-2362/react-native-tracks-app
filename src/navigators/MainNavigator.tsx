import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator.tsx';
import SignInScreen from '../screens/SignInScreen.tsx';
import SignupScreen from '../screens/SignupScreen.tsx';
import {AuthContext} from '../context/AuthContext.tsx';
import ResolveAuthScreen from '../screens/ResolveAuthScreen.tsx';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const {state} = useContext(AuthContext);
  const isAuthenticated = !!state.token;
  return (
    <Stack.Navigator initialRouteName={'ResolveAuth'}>
      {isAuthenticated ? (
        <Stack.Group screenOptions={{headerShown: false, title: 'Tracks App'}}>
          <Stack.Screen
            name={'BottomTabsNavigator'}
            component={BottomTabsNavigator}
          />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name={'ResolveAuth'} component={ResolveAuthScreen} />
          <Stack.Screen name={'Signin'} component={SignInScreen} />
          <Stack.Screen name={'Signup'} component={SignupScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
