import flyd from 'flyd';
import { over, lensProp } from 'ramda';
import { createMergeIntoOne, createScan } from 'meiosis';
import { update } from 'yo-yo';

export const mergeIntoOne = createMergeIntoOne(flyd);
export const scan = createScan(flyd);

export function nest(path, modelChanges) {
  return modelChanges.map(modelChange => model => over(lensProp(path), modelChange, model));
}

export function render(view) {
  return function(model) {
    const el = document.querySelector('#app');
    let newEl = update(el, view(model));
    el.appendChild(newEl)
  };
}

export const status = {
  OUTOFGAME: Symbol('out-of-game'),
  PLAYING: Symbol('playing'),
  AUTO: Symbol('auto'),
  GAMEOVER: Symbol('game-over')
};

export const result = {
  PLAYER: Symbol('player'),
  BOT: Symbol('bot'),
  DRAW: Symbol('draw'),
  NONE: Symbol('none')
};
