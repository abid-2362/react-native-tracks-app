import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateTrackScreen from '../screens/CreateTrackScreen.tsx';
import AccountScreen from '../screens/AccountScreen.tsx';
import TracksNavigator from './TracksNavigator.tsx';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={'TracksNavigator'} component={TracksNavigator} />
      <Tab.Screen name="CreateTrack" component={CreateTrackScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
