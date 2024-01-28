import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext.tsx';

interface IResolveAuthScreenProps {}

const ResolveAuthScreen = ({}: IResolveAuthScreenProps) => {
  const {tryLocalSignin} = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screen}>
      <Text h1>Tracks App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResolveAuthScreen;
