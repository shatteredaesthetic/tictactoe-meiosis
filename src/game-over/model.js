import { actions } from './actions';
import { status } from '../util';

export const initialModel = () => ({
  result: result.NONE
});

export const modelChanges = actions.getResult.map(result => model => {
  model.result = result;
  return model;
});
