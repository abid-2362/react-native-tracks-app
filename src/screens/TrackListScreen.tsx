import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TracksParamsList} from '../types';

interface ITrackListScreenProps {}

const TrackListScreen = ({}: ITrackListScreenProps) => {
  const navigation: NavigationProp<TracksParamsList> = useNavigation();
  return (
    <View style={styles.screen}>
      <Text>Track List Screen</Text>
      <Button
        title={'Track Details'}
        onPress={() => navigation.navigate('TrackDetails')}
      />
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

export default TrackListScreen;
