import * as React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {useContext} from 'react';
import {LocationContext} from '../context/LocationContext.ts';

interface IMapProps {}

const Map = ({}: IMapProps) => {
  const {state} = useContext(LocationContext);
  if (!state.currentLocation) {
    return null;
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...state.currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        {/*<Polyline coordinates={points} />*/}
        <Circle
          center={state.currentLocation.coords}
          radius={30}
          strokeColor={'rgba(158, 158, 255, 1.0)'}
          fillColor={'rgba(158, 158, 255, 0.3)'}
        />
        <Polyline coordinates={state.locations.map(loc => loc.coords)} />
      </MapView>
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
