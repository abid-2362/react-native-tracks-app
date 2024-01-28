import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import Map from '../components/Map.tsx';
import {LocationContext} from '../context/LocationContext.ts';
import {useContext} from 'react';

interface ITrackCreateScreenProps {}

const CreateTrackScreen = ({}: ITrackCreateScreenProps) => {
  const {addLocation} = useContext(LocationContext);
  return (
    <View style={styles.screen}>
      <Text h3>Create a Route</Text>
      <Map />
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

export default CreateTrackScreen;
