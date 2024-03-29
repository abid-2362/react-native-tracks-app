import * as React from 'react';
import {ActivityIndicator, Platform, StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';
import Map from '../components/Map.tsx';
import {LocationContext} from '../context/LocationContext.ts';
import {useCallback, useContext} from 'react';
import TrackForm from '../components/TrackForm.tsx';
import {useIsFocused} from '@react-navigation/native';
import {GeoPosition} from 'react-native-geolocation-service';
import useLocation from '../hooks/useLocation.ts';

interface ITrackCreateScreenProps {}

const CreateTrackScreen = ({}: ITrackCreateScreenProps) => {
  const {state, addLocation} = useContext(LocationContext);
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
      <View style={styles.titleContainer}>
        <Text h3>Add Track</Text>
      </View>
      <Map />
      <TrackForm />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleContainer: {
    paddingLeft: 5,
    marginBottom: 10,
  },
});

export default CreateTrackScreen;
