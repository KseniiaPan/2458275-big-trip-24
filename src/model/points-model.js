import {getRandomPoint} from '../mock/points';

const POINTS_COUNT = 15;

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
