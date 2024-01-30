import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import {
  GenericActionType,
  ILocation,
  ITrack,
} from '../interfaces/interfaces.ts';
import {TrackContext} from '../types';
import TrackerServer from '../api/tracker.ts';
// import {GeoPosition} from 'react-native-geolocation-service';

/* CONSTANTS */
const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
/* /CONSTANTS */

type State = ITrack[];
const initialState: State = [];
const trackReducer = (state: State, action: GenericActionType) => {
  switch (action.type) {
    case FETCH_TRACKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks =
  (dispatch: React.Dispatch<GenericActionType>) => async () => {
    const response = await TrackerServer.get('/tracks');
    dispatch({type: FETCH_TRACKS_SUCCESS, payload: response.data});
  };

const createTrack =
  (dispatch: React.Dispatch<GenericActionType>) =>
  async (name: string, locations: ILocation[]) => {
    try {
      // make API request
      await TrackerServer.post('/tracks', {
        name,
        locations,
      });

      // if required in the future, dispatch can be used like this.
      dispatch({type: 'any_action'});
    } catch (err) {}
  };

const _ = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  initialState,
);

const {Context}: {Context: React.Context<TrackContext>} = _;
const {Provider} = _;

export {Context as TrackContext, Provider as TrackProvider};
