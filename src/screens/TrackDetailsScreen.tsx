import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {useContext} from 'react';
import {TrackContext} from '../context/TrackContext.ts';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {TracksParamsList} from '../types';
import Spacer from '../components/Spacer.tsx';
import MapView, {Polyline} from 'react-native-maps';

interface ITrackDetailsScreenProps {}

const TrackDetailsScreen = ({}: ITrackDetailsScreenProps) => {
  const {state} = useContext(TrackContext);
  const route: RouteProp<TracksParamsList, 'TrackDetails'> = useRoute();
  const navigation: NavigationProp<TracksParamsList> = useNavigation();
  const track = state.find(t => t._id === route.params._id);

  if (!track) {
    return (
      <View style={styles.screen}>
        <Spacer>
          <Text h2>Track Not Found</Text>
        </Spacer>
        <Spacer>
          <Button title={'Go Back'} onPress={navigation.goBack} />
        </Spacer>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Spacer>
        <Text h3>{track.name}</Text>
      </Spacer>
      <MapView
        style={styles.map}
        initialRegion={{
          ...track.locations[0].coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}>
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    flex: 1,
  },
});

export default TrackDetailsScreen;
