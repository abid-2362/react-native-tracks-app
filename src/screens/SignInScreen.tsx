import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useContext} from 'react';
import Spacer from '../components/Spacer.tsx';
import {AuthContext} from '../context/AuthContext.tsx';
import AuthForm from '../components/AuthForm.tsx';
import AuthNavigationLink from '../components/AuthNavigationLink.tsx';

interface ISignInScreenProps {}

const SignInScreen = ({}: ISignInScreenProps) => {
  const {state, signin} = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <AuthForm
        headerTitle={'Tracker Sign In'}
        onSubmit={signin}
        buttonTitle={'Sign In'}
        errorMessage={state.errorMessage}
      />
      <Spacer>
        <AuthNavigationLink to={'Signup'} linkText={'Sign Up'} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SignInScreen;
