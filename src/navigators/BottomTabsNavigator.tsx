import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateTrackScreen from '../screens/CreateTrackScreen.tsx';
import AccountScreen from '../screens/AccountScreen.tsx';
import TracksNavigator from './TracksNavigator.tsx';
import {Icon} from '@rneui/themed';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={'TracksNavigator'}
        component={TracksNavigator}
        options={{
          title: 'Tracks',
          tabBarIcon: () => (
            <Icon name={'go-kart-track'} type={'material-community'} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateTrack"
        component={CreateTrackScreen}
        options={{
          title: 'Add Track',
          tabBarIcon: () => <Icon name={'add'} type={'material'} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: () => (
            <Icon name={'account'} type={'material-community'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
