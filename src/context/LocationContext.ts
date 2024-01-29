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
const START_RECORDING = 'START_RECORDING';
const STOP_RECORDING = 'STOP_RECORDING';
const ADD_LOCATION = 'ADD_LOCATION';
const ADD_NAME = 'ADD_NAME';
/* implementation */

const initialState: ILocationState = {
  name: '',
  recording: false,
  locations: [],
  currentLocation: null,
};

const locationReducer = (
  state: ILocationState,
  action: GenericActionType,
): ILocationState => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return {...state, currentLocation: action.payload};

    case START_RECORDING:
      return {...state, recording: true};

    case STOP_RECORDING:
      return {...state, recording: false};
    case ADD_LOCATION:
      return {...state, locations: [...state.locations, action.payload]};

    case ADD_NAME:
      return {...state, name: action.payload};

    default:
      return state;
  }
};

const startRecording = (dispatch: React.Dispatch<GenericActionType>) => () => {
  dispatch({type: START_RECORDING});
};
const stopRecording = (dispatch: React.Dispatch<GenericActionType>) => () => {
  dispatch({type: STOP_RECORDING});
};
const addLocation =
  (dispatch: React.Dispatch<GenericActionType>) =>
  (location: ILocation, isRecording: boolean = false) => {
    dispatch({type: ADD_CURRENT_LOCATION, payload: location});
    console.log('LocationContext.ts', 'isRecording', isRecording);
    if (isRecording) {
      dispatch({type: ADD_LOCATION, payload: location});
    }
  };

const addName =
  (dispatch: React.Dispatch<GenericActionType>) => (name: string) => {
    dispatch({type: ADD_NAME, payload: name});
  };

const _a = createDataContext(
  locationReducer,
  {
    addName,
    startRecording,
    stopRecording,
    addLocation,
  },
  initialState,
);
const {Context}: {Context: React.Context<ILocationContext>} = _a;
const {Provider} = _a;

export {Context as LocationContext, Provider as LocationProvider};
