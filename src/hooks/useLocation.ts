import {useEffect, useRef, useState, useCallback} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {errorHandler} from '../utils/utils.ts';
import {AddLocationSingleParam} from '../types';

const useLocation = (
  shouldTrack: boolean,
  addLocation: AddLocationSingleParam,
) => {
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
    Geolocation.getCurrentPosition(addLocation, errorHandler, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      accuracy: {android: 'high', ios: 'bestForNavigation'},
      distanceFilter: 10,
      showLocationDialog: true,
      forceRequestLocation: false,
      forceLocationManager: false,
    });
  };

  const startWatching = useCallback(() => {
    requestLocationPermissions().catch(errorHandler);

    if (hasLocationPermission) {
      watchId.current = Geolocation.watchPosition(addLocation, errorHandler, {
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
      });
    } else {
      // Alert.alert(
      //   'Permission Denied',
      //   'Open app and allow location permission for this app to work correctly.',
      // );
    }
    //// eslint-disable-next-line react-hooks/exhaustive-deps-1
  }, [hasLocationPermission, addLocation]);

  const stopWatching = useCallback(() => {
    Geolocation.clearWatch(watchId.current);
  }, []);

  const stopObserving = useCallback(() => {
    Geolocation.stopObserving();
  }, []);

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      stopWatching();
    }

    return () => {
      stopWatching();
    };
  }, [shouldTrack, addLocation]);

  return {getCurrentPosition, startWatching, stopWatching, stopObserving};
};

export default useLocation;
