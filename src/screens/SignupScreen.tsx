import * as React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthParamsList, TabsParamsList} from '../types';

interface ISignupScreenProps {}

const SignupScreen = ({}: ISignupScreenProps) => {
  const authNavigation: NavigationProp<AuthParamsList> = useNavigation();
  const tabNavigation: NavigationProp<TabsParamsList> = useNavigation();
  return (
    <View style={styles.screen}>
      <Button
        title={'Sign in'}
        onPress={() => authNavigation.navigate('Signin')}
      />
      <Button
        title={'Go to main app'}
        onPress={() => tabNavigation.navigate('CreateTrack')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default SignupScreen;
