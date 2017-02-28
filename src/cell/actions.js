import flyd from 'flyd';

export const actions = {
  select: flyd.stream();
};

export const intents = {
  select: label => actions.select(label)
};
