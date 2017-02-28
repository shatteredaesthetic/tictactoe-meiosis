import yo from 'yo-yo';
import { intents } from './actions';

export default function menuView(model) {
  return yo`
    <div>
      <div>Tic-Tac-Toe!</div>
      <label for="player">Player:</label>
      <input type="text"
             name="player"
             value=${model.name}
             oninput=${e => intents.playerName(e.target.value)} />
      <button onclick=${intents.submit}>Play</button>
    </div>
  `;
}
