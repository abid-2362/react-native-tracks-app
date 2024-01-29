import {GeoPosition} from 'react-native-geolocation-service';

export type AuthParamsList = {
  Signin: undefined;
  Signup: undefined;
};

export type TracksParamsList = {
  TrackDetails: undefined;
  TrackList: undefined;
};

export type TabsParamsList = {
  AuthNavigator: TracksParamsList;
  CreateTrack: undefined;
  Account: undefined;
};

export type AddLocationSingleParam = (location: GeoPosition) => void;
export type AddLocation = (location: GeoPosition, isRecording: boolean) => void;
