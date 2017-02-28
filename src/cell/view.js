import yo from 'yo-yo';
import { intents } from './actions';

export function cellView(model) {
  return yo`
    <div class="cell" onclick=${e => intents.select(model.id)}>
      ${model.label}
    </div>
  `;
}
