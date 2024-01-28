import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from '@rneui/themed';
import Spacer from '../components/Spacer.tsx';
import {useState} from 'react';

interface IAuthFormProps {
  headerTitle: string;
  onSubmit: (email: string, password: string) => void;
  buttonTitle: string;
  errorMessage?: string;
}

const AuthForm = ({
  headerTitle,
  onSubmit,
  buttonTitle,
  errorMessage,
}: IAuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {
    onSubmit(email, password);
  };
  return (
    <>
      <Spacer>
        <Text h3 style={styles.textNote}>
          {headerTitle}
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

      {errorMessage && <Text style={[styles.textError]}>{errorMessage}</Text>}

      <Spacer>
        <Button title={buttonTitle} onPress={submitHandler} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  textNote: {
    textAlign: 'center',
  },
  textError: {
    color: 'red',
    marginHorizontal: 15,
  },
});

export default AuthForm;
