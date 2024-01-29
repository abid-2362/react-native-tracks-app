/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigators/RootNavigation';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './src/navigators/MainNavigator.tsx';
import {AuthProvider} from './src/context/AuthContext.tsx';
import {LocationProvider} from './src/context/LocationContext.ts';
import {TrackProvider} from './src/context/TrackContext.ts';

function NavigatorComponent() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
  };
  // TODO:: Conditionally render the navigator based on auth here.
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>

      <MainNavigator />
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigatorComponent />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
export default App;
