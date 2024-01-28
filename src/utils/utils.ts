import {IPoint} from '../interfaces/interfaces.ts';

export const emptyFunction = () => {};
export const errorHandler = (err: any) => console.log('error: ', err); //eslint-disable-line no-console

export const getDummyPoints = () => {
  let points: IPoint[] = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.002,
        longitude: -122.03121 + i * 0.001,
      });
    }
  }
  return points;
};
