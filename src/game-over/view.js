import yo from 'yo-yo';
import { intents } from '../app/actions';
import { status } from '../util';

export default function gameOverView(model) {
  return yo`
    <div>
      ${model.result}
      <button onclick=${() => intents.changeStatus(status.PLAYING)}
    </div>
  `;
}
