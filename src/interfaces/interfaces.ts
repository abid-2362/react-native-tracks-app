// import {GeoPosition} from 'react-native-geolocation-service';
import {AddLocation} from '../types';
import {GeoPosition} from 'react-native-geolocation-service';

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
  payload?: any;
};

// export interface ICoords {
//   accuracy: number;
//   altitude: number;
//   altitudeAccuracy: number;
//   heading: number;
//   latitude: number;
//   longitude: number;
//   speed: number;
// }
export interface ITrack {
  _id: string;
  userId: string;
  name: string;
  locations: ILocation[];
}

export interface ILocation extends GeoPosition {
  _id?: string;
}
// export interface ILocation {
//   coords: GeoCoordinates;
//   timestamp: number;
//   _id?: string;
// }
export interface ILocationState {
  name: string;
  recording: boolean;
  locations: ILocation[];
  currentLocation: ILocation | null;
}

export interface ILocationContext {
  state: ILocationState;
  startRecording: emptyFunction;
  stopRecording: emptyFunction;
  addLocation: AddLocation;
  addName: (a: string) => void;
  resetLocationState: emptyFunction;
}

export interface IPoint {
  latitude: number;
  longitude: number;
}
