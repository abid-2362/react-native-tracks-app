import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import Spacer from '../components/Spacer.tsx';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext.tsx';

interface IAccountScreenProps {}

const AccountScreen = ({}: IAccountScreenProps) => {
  const {signout} = useContext(AuthContext);
  console.log('Accounts Screen');

  return (
    <View style={styles.screen}>
      <Spacer />
      <Text h3>Accounts Screen</Text>
      <Spacer>
        <Button title={'Logout'} onPress={signout} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default AccountScreen;
