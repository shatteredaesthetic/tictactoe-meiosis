import { range, mergeAll } from 'ramda';
import { actions } from './actions';
import { mergeIntoOne } from '../util';
import { cell } from '../cell';

export const initialModel = () => ({
  cells: range(0, 9).map(cell.initialModel),
  available: mergeAll(range(0, 9).map(n => ({ [n]: true })))
});



export const modelChanges = mergeIntoOne([

]);
