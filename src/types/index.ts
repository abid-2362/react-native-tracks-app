import {GeoPosition} from 'react-native-geolocation-service';
import {emptyFunction, ITrack} from '../interfaces/interfaces.ts';

export type AuthParamsList = {
  Signin: undefined;
  Signup: undefined;
};

export type TracksParamsList = {
  TrackDetails: {_id: string};
  TrackList: undefined;
};

export type TabsParamsList = {
  AuthNavigator: TracksParamsList;
  CreateTrack: undefined;
  Account: undefined;
};

export type AddLocationSingleParam = (location: GeoPosition) => void;
export type AddLocation = (location: GeoPosition, isRecording: boolean) => void;

/*TrackContext*/
export type TrackContext = {
  state: ITrack[];
  fetchTracks: emptyFunction;
  createTrack: any;
};
