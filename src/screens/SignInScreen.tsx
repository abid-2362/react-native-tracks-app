import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import {useContext, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthParamsList} from '../types';
import Spacer from '../components/Spacer.tsx';
import {AuthContext} from '../context/AuthContext.tsx';

interface ISignInScreenProps {}

const SignInScreen = ({}: ISignInScreenProps) => {
  const {state, signin} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authNavigation: NavigationProp<AuthParamsList> = useNavigation();

  const loginHandler = () => {
    signin(email, password);
  };
  return (
    <View style={styles.screen}>
      <Spacer>
        <Text h3 style={styles.textNote}>
          Tracker Sign in
        </Text>
      </Spacer>
      <Input
        label={'Email'}
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <Spacer />
      <Input
        label={'Password'}
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize={'none'}
        secureTextEntry
      />

      {state.errorMessage && (
        <Text style={[styles.textError]}>{state.errorMessage}</Text>
      )}

      <Spacer>
        <Button title={'Sign In'} onPress={loginHandler} />
      </Spacer>
      <Spacer>
        <Text style={styles.textNote}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => authNavigation.navigate('Signup')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </Text>
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
  textNote: {
    textAlign: 'center',
  },
  textError: {
    color: 'red',
    marginHorizontal: 15,
  },
});

export default SignInScreen;
