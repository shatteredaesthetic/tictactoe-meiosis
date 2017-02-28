import flyd from 'flyd';

export const actions = {
  getResult: flyd.stream()
};

export const intents = {
  getResult: result => actions.getResult(result)
};
