import yo from 'yo-yo';

import { intents } from './actions';
import { cellView } from '../cell/view';

export const boardView(model) {
  return yo`
    <div class="board">
      ${model.cells.map(cellView)}
    </div>
  `;
}
