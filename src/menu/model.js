import { actions } from './actions';
import { mergeIntoOne } from '../util';

export const initialModel = () => ({
  name: ""
});

export const modelChanges = actions.playerName.map(name => model => {
  model.name = name;
  return model;
});
