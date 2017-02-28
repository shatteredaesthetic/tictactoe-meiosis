import { actions } from './actions';

export const iniitialModel = id => ({
  id,
  label: null
});

export const modelChanges = actions.select.map(lbl => model => {
  model.label = lbl;
  return model;
});
