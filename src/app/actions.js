import flyd from 'flyd';

export const actions = {
  changeStatus: flyd.stream()
};

export const intents = {
  changeStatus: status => () => actions.changeStatus(status)
};
