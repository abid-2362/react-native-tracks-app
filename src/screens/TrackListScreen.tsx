import * as React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ListItem} from '@rneui/themed';
import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {TracksParamsList} from '../types';
import {useContext, useEffect} from 'react';
import {TrackContext} from '../context/TrackContext.ts';

interface ITrackListScreenProps {}

const TrackListScreen = ({}: ITrackListScreenProps) => {
  const navigation: NavigationProp<TracksParamsList> = useNavigation();
  const {state, fetchTracks} = useContext(TrackContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchTracks();
    }
  }, [isFocused]);

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={item => item?._id ?? item.name}
        data={state}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                /*navigation*/
                navigation.navigate('TrackDetails', {
                  _id: item?._id,
                });
              }}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.userId}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
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

export default TrackListScreen;
