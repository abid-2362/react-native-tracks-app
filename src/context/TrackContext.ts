import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import {GenericActionType, ILocation} from '../interfaces/interfaces.ts';
import {TrackerContext} from '../types';
import TrackerServer from '../api/tracker.ts';

type State = ITrack[];
interface ITrack {}
const initialState: State = [];
const trackReducer = (state: State, action: GenericActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch: React.Dispatch<GenericActionType>) => () => {
  dispatch({type: 'any_action'});
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

const {Context}: {Context: React.Context<TrackerContext>} = _;
const {Provider} = _;

export {Context as TrackerContext, Provider as TrackProvider};
