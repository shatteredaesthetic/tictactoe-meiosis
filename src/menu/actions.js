import flyd from 'flyd';
import { changeStatus } from '../app/actions';
import { status } from '../util';

export const actions = {
  playerName: flyd.stream()
};

export const intents = {
  playerName: name => () => actions.playerName(name),
  submit: () => changeStatus(status.PLAYING)
};
