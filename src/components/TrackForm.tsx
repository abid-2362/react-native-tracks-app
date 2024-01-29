import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import Spacer from './Spacer.tsx';
import {useContext} from 'react';
import {LocationContext} from '../context/LocationContext.ts';
import useSaveTrack from '../hooks/useSaveTrack.ts';

interface ITrackFormProps {}

const TrackForm = ({}: ITrackFormProps) => {
  const {state, startRecording, stopRecording, addName} =
    useContext(LocationContext);
  const {saveTrack} = useSaveTrack();

  // console.log('added locations', state.locations.length);
  return (
    <View style={styles.form}>
      <Spacer>
        <Input
          label={'Track Name'}
          value={state.name}
          onChangeText={addName}
          placeholder={'Enter Name for this recording'}
        />
        {state.recording ? (
          <Button
            color={'secondary'}
            title={'Stop Tracking'}
            onPress={stopRecording}
          />
        ) : (
          <>
            <Button title={'Start Tracking'} onPress={startRecording} />

            {Boolean(state.locations.length) && (
              <>
                <Spacer />
                <Button
                  color={'success'}
                  title={'Save Recording'}
                  onPress={saveTrack}
                />
              </>
            )}
          </>
        )}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default TrackForm;
