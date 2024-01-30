import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from '@rneui/themed';
import Spacer from '../components/Spacer.tsx';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext.tsx';
import {openAppSettings} from '../utils/utils.ts';

interface IAccountScreenProps {}

const AccountScreen = ({}: IAccountScreenProps) => {
  const {signout} = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <Spacer>
        <View style={styles.row}>
          <Text h3>Accounts Screen</Text>
          <Icon name={'settings'} onPress={openAppSettings} />
        </View>
      </Spacer>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default AccountScreen;
