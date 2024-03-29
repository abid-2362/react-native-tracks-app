import {useContext} from 'react';
import {LocationContext} from '../context/LocationContext.ts';
import {TrackContext} from '../context/TrackContext.ts';
import {navigate} from '../navigators/RootNavigation.ts';

const useSaveTrack = () => {
  const {createTrack} = useContext(TrackContext);
  const {state: locationState, resetLocationState} =
    useContext(LocationContext);

  // making request to api

  const saveTrack = async () => {
    await createTrack(locationState.name, locationState.locations);
    resetLocationState();
    navigate('TrackList');
  };

  return {saveTrack};
};

export default useSaveTrack;
