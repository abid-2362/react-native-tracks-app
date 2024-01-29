import * as React from 'react';
import {ActivityIndicator, Platform, StyleSheet, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import Map from '../components/Map.tsx';
import {LocationContext} from '../context/LocationContext.ts';
import {useCallback, useContext} from 'react';
import TrackForm from '../components/TrackForm.tsx';
import {useIsFocused} from '@react-navigation/native';
import {GeoPosition} from 'react-native-geolocation-service';
import useLocation from '../hooks/useLocation.ts';
import Spacer from '../components/Spacer.tsx';

interface ITrackCreateScreenProps {}

const CreateTrackScreen = ({}: ITrackCreateScreenProps) => {
  const {state, addLocation} = useContext(LocationContext);
  const isFocused = useIsFocused();
  // console.log('OUTSIDE', recording);

  const addLocationCallback = useCallback(
    (location: GeoPosition) => {
      // console.log('INSIDE', recording);
      addLocation(location, state.recording);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.recording],
  );

  const {stopObserving} = useLocation(isFocused, addLocationCallback);

  if (Platform.OS === 'android') {
    return <Text>Android Version is not working because of API_KEY</Text>;
  }

  if (!state.currentLocation) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size={50} />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text h3>Create a Route</Text>
      <Map />
      <TrackForm />

      <Spacer>
        <Button
          color={'error'}
          title={'Stop Observing'}
          onPress={() => stopObserving()}
        />
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

export default CreateTrackScreen;
