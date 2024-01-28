import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ActivityIndicator,
} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {useCallback, useContext} from 'react';
import {Button} from '@rneui/themed';
import Spacer from './Spacer.tsx';
import {LocationContext} from '../context/LocationContext.ts';
import useLocation from '../hooks/useLocation.ts';
import {useIsFocused} from '@react-navigation/native';

interface IMapProps {}

const Map = ({}: IMapProps) => {
  const {
    state: {currentLocation},
    addLocation,
  } = useContext(LocationContext);
  const isFocused = useIsFocused();

  const {startTracking, stopTracking, stopObserving} = useLocation(
    isFocused,
    addLocation,
  );

  if (Platform.OS === 'android') {
    return <Text>Android Version is not working because of API_KEY</Text>;
  }

  if (!currentLocation) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size={50} />
      </View>
    );
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        {/*<Polyline coordinates={points} />*/}
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor={'rgba(158, 158, 255, 1.0)'}
          fillColor={'rgba(158, 158, 255, 0.3)'}
        />
      </MapView>
      <Spacer>
        <Button title={'Start Tracking'} onPress={() => startTracking()} />
      </Spacer>
      <Spacer>
        <Button
          color={'secondary'}
          title={'Stop Tracking'}
          onPress={() => stopTracking()}
        />
      </Spacer>

      <Spacer>
        <Button
          color={'error'}
          title={'Stop Observing'}
          onPress={() => stopObserving()}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    // height: '70%',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Map;
