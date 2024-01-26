import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrackListScreen from '../screens/TrackListScreen.tsx';
import TrackDetailsScreen from '../screens/TrackDetailsScreen.tsx';

const TracksStack = createNativeStackNavigator();

interface ITracksNavigatorProps {}

const TracksNavigator = ({}: ITracksNavigatorProps) => (
  <TracksStack.Navigator screenOptions={{headerShown: false}}>
    <TracksStack.Screen name={'TrackDetails'} component={TrackDetailsScreen} />
    <TracksStack.Screen name={'TrackList'} component={TrackListScreen} />
  </TracksStack.Navigator>
);

export default TracksNavigator;
