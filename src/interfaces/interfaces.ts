// import {GeoPosition} from 'react-native-geolocation-service';
import {AddLocation} from '../types';

export type emptyFunction = () => void;
export type optionalCallbackFunction = (onSuccess?: emptyFunction) => void;
export interface IAuthState {
  token: null | string;
  errorMessage: string;
}
export interface IAuthContext {
  state: IAuthState;
  signin: (title: string, content: string, onSuccess?: emptyFunction) => void;
  signup: (email: string, password: string) => void;
  signout: emptyFunction;
  clearErrorMessage: emptyFunction;
  tryLocalSignin: emptyFunction;
}

/*LocationContext*/

export type GenericActionType = {
  type: any;
  payload: any;
};

export interface ICoords {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
}
export interface ILocation {
  coords: ICoords;
  timestamp: number;
}
export interface ILocationState {
  recording: boolean;
  locations: ILocation[];
  currentLocation: ILocation | null;
}

export interface ILocationContext {
  state: ILocationState;
  startRecording: emptyFunction;
  stopRecording: emptyFunction;
  addLocation: AddLocation;
}

export interface IPoint {
  latitude: number;
  longitude: number;
}
