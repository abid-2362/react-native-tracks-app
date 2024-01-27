import {createNavigationContainerRef} from '@react-navigation/native';
import {AuthParamsList, TabsParamsList} from '../types';

export const navigationRef = createNavigationContainerRef<
  keyof TabsParamsList | keyof AuthParamsList
>();

export function navigate(name: any, params: any = undefined) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
