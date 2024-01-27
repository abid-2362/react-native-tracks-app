import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Button, Input} from '@rneui/themed';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {AuthParamsList, TabsParamsList} from '../types';
import Spacer from '../components/Spacer.tsx';
import {useContext, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthParamsList} from '../types';
import {AuthContext} from '../context/AuthContext.tsx';

interface ISignupScreenProps {}

const SignupScreen = ({}: ISignupScreenProps) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authNavigation: NavigationProp<AuthParamsList> = useNavigation();
  // const tabNavigation: NavigationProp<TabsParamsList> = useNavigation();

  const signupHandler = () => {
    signup(email, password);
  };
  return (
    <View style={styles.screen}>
      <Spacer>
        <Text h3 style={styles.textNote}>
          Tracker Registration
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
        <Button title={'Sign Up'} onPress={signupHandler} />
      </Spacer>

      <Spacer>
        <Text style={styles.textNote}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => authNavigation.navigate('Signin')}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </Text>
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
  textNote: {
    textAlign: 'center',
  },
  textError: {
    color: 'red',
    marginHorizontal: 15,
  },
});

export default SignupScreen;
