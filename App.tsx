/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './src/navigators/MainNavigator.tsx';

function NavigatorComponent(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
  };
  // TODO:: Conditionally render the navigator based on auth here.
  return (
    <NavigationContainer>
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
  return <NavigatorComponent />;
};
export default App;
