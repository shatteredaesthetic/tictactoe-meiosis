import flyd from 'flyd';
import { applyModelChange } from 'meiosis';

import { mergeIntoOne, scan, nest, render, status } from '../util';
import { actions } from './actions';
import { board } from '../board';
import { menu } from '../menu';
import { gameOver } from '../game-over';

export function startApp(view) {
  const initialModel = {
    status: status.OUTOFGAME,
    config: menu.initialModel(),
    board: board.initialModel(),
    result: gameOver.initialModel()
  };

  const changeStatus = actions.changeStatus.map(status => model => {
    model.status = status;
    return model;
  });

  const modelChanges = mergeIntoOne([
    changeStatus,
    nest('config', menu.modelChanges),
    nest('board', board.modelChanges),
    nest('result', gameOver.modelChanges)
  ]);

  const model = scan(applyModelChange, initialModel, modelChanges);

  model.map(render(view));
}
