import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useContext} from 'react';
import Spacer from '../components/Spacer.tsx';
import {AuthContext} from '../context/AuthContext.tsx';
import AuthForm from '../components/AuthForm.tsx';
import AuthNavigationLink from '../components/AuthNavigationLink.tsx';
import {useFocusEffect} from '@react-navigation/native';

interface ISignInScreenProps {}

const SignInScreen = ({}: ISignInScreenProps) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      clearErrorMessage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

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
