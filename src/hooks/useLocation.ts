import {useEffect, useRef, useState, useCallback} from 'react';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {errorHandler} from '../utils/utils.ts';
import {AddLocation} from '../types';

const useLocation = (shouldTrack: boolean, addLocation: AddLocation) => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const watchId = useRef<number>(0);

  const requestLocationPermissions = async () => {
    // iOS based authorization request, android permission needed to be asked separately.
    // https://www.npmjs.com/package/react-native-geolocation-service#async-requestauthorizationauthorizationlevel-ios-only
    const permission = await Geolocation.requestAuthorization('always');
    const hlp = permission === 'granted';
    setHasLocationPermission(hlp);

    // TODO:: Android Version of permission Implementation is pending because of NO_API_KEY for maps
    // https://reactnative.dev/docs/permissionsandroid
    // https://github.com/Agontuk/react-native-geolocation-service/blob/HEAD/docs/accuracy.md#android
  };

  const getCurrentPosition = () => {
    requestLocationPermissions().catch(errorHandler);
    Geolocation.getCurrentPosition(
      position => {
        addLocation(position);
      },
      error => {
        // console.log(error.code, error.message);
        console.log(error); //eslint-disable-line no-console
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        accuracy: {android: 'high', ios: 'bestForNavigation'},
        distanceFilter: 10,
        showLocationDialog: true,
        forceRequestLocation: false,
        forceLocationManager: false,
      },
    );
  };
  const startTracking = useCallback(() => {
    requestLocationPermissions().catch(errorHandler);

    if (hasLocationPermission) {
      watchId.current = Geolocation.watchPosition(
        position => {
          addLocation(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message); //eslint-disable-line no-console
        },
        {
          accuracy: {android: 'high', ios: 'bestForNavigation'},
          enableHighAccuracy: true,
          distanceFilter: 10,
          interval: 1000,
          fastestInterval: 1000,
          showLocationDialog: true,
          forceRequestLocation: false,
          forceLocationManager: false,
          useSignificantChanges: false,
          showsBackgroundLocationIndicator: true,
        },
      );
    } else {
      // Alert.alert(
      //   'Permission Denied',
      //   'Open app and allow location permission for this app to work correctly.',
      // );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasLocationPermission]);

  const stopTracking = useCallback(() => {
    Geolocation.clearWatch(watchId.current);
  }, []);

  const stopObserving = useCallback(() => {
    Geolocation.stopObserving();
  }, []);

  useEffect(() => {
    if (shouldTrack) {
      startTracking();
    } else {
      stopTracking();
    }
  }, [shouldTrack]);

  return {getCurrentPosition, startTracking, stopTracking, stopObserving};
};

export default useLocation;
