import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface ISignInScreenProps {}

const SignInScreen = ({}: ISignInScreenProps) => (
  <View style={styles.screen}>
    <Text>Sign in screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignInScreen;
