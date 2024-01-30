import * as React from 'react';
import {ActivityIndicator, Platform, StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import Map from '../components/Map.tsx';
import {LocationContext} from '../context/LocationContext.ts';
import {useCallback, useContext, useEffect, useState} from 'react';
import TrackForm from '../components/TrackForm.tsx';
import {useIsFocused} from '@react-navigation/native';
import {GeoPosition} from 'react-native-geolocation-service';
import useLocation from '../hooks/useLocation.ts';

interface ITrackCreateScreenProps {}

const CreateTrackScreen = ({}: ITrackCreateScreenProps) => {
  const {state, addLocation} = useContext(LocationContext);
  const [rerender, setRerender] = useState(false);
  const isFocused = useIsFocused();

  const addLocationCallback = useCallback(
    (location: GeoPosition) => {
      addLocation(location, state.recording);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.recording],
  );

  const shouldTrack = isFocused || state.recording;

  useLocation(shouldTrack, addLocationCallback);

  // useEffect(() => {
  //   if (!state.currentLocation) {
  //     setRerender(!!state.currentLocation);
  //   }
  // }, [state.currentLocation]);

  if (Platform.OS === 'android') {
    return <Text>Android Version is not working because of API_KEY</Text>;
  }

  console.log(
    'CreateTrackScreen.tsx',
    'state.currentLocation',
    state.currentLocation,
  );

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
