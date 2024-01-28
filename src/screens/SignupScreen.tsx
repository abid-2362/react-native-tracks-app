import * as React from 'react';
import {StyleSheet, View} from 'react-native';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {AuthParamsList, TabsParamsList} from '../types';
import Spacer from '../components/Spacer.tsx';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext.tsx';
import AuthForm from '../components/AuthForm.tsx';
import AuthNavigationLink from '../components/AuthNavigationLink.tsx';

interface ISignupScreenProps {}

const SignupScreen = ({}: ISignupScreenProps) => {
  const {state, signup} = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <AuthForm
        headerTitle={'Tracker Registration'}
        onSubmit={signup}
        buttonTitle={'Sign Up'}
        errorMessage={state.errorMessage}
      />
      <Spacer>
        <AuthNavigationLink to={'Signin'} linkText={'Sign In'} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SignupScreen;
