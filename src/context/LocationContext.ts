import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import {
  GenericActionType,
  ILocation,
  ILocationContext,
  ILocationState,
} from '../interfaces/interfaces.ts';

/* CONSTANTS */
const ADD_CURRENT_LOCATION = 'ADD_CURRENT_LOCATION';
/* implementation */

const initialState: ILocationState = {
  recording: false,
  locations: [],
  currentLocation: null,
};

const locationReducer = (state: ILocationState, action: GenericActionType) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      const updatedState: ILocationState = {
        ...state,
        currentLocation: action.payload,
      };
      return updatedState;

    default:
      return state;
  }
};

const startRecording =
  (dispatch: React.Dispatch<GenericActionType>) => () => {};
const stopRecording = (dispatch: React.Dispatch<GenericActionType>) => () => {};
const addLocation =
  (dispatch: React.Dispatch<GenericActionType>) => (location: ILocation) => {
    console.log('adding location');
    dispatch({type: ADD_CURRENT_LOCATION, payload: location});
  };

const _a = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  initialState,
);
const {Context}: {Context: React.Context<ILocationContext>} = _a;
const {Provider} = _a;

export {Context as LocationContext, Provider as LocationProvider};
