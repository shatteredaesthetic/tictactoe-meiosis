import yo from 'yo-yo';
import { boardView } from '../board/view';
import { menuView } from '../menu/view';
import { gameOverView } from '../game-over';
import { status } from '../util';

function content(model) {
  if(model.status === status.OUTOFGAME) {
    return menuView(model);
  } else if(model.status === status.GAMEOVER) {
    return gameOverView(model);
  } else {
    return boardView(model);
  }
}

export default function view(model) {
  return yo`
    <div class="container-outer">
      <div class="container-inner">
        ${content(model)}
      </div>
    </div>
  `;
}
