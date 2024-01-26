import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator.tsx';
import SignInScreen from '../screens/SignInScreen.tsx';
import SignupScreen from '../screens/SignupScreen.tsx';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const isLoggedIn = false;
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={'BottomTabsNavigator'}
            component={BottomTabsNavigator}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name={'Signin'} component={SignInScreen} />
          <Stack.Screen name={'Signup'} component={SignupScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
