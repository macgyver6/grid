import * as model from '../model/TextInput';
import { reformat } from './formOperations';
const defaultState = {
  1: new model.FormSection({ uuid: 1, children: [3, 2, 4] }),
  2: new model.TextInput({ uuid: 2 }),
  3: new model.Padding({ uuid: 3, width: 5 }),
  4: new model.TextInput({ uuid: 4, width: 13 }),
};

const reducers = {
  ENTITYRESIZED: (state, action) => ({
    ...state,
    [action.entityId]: { ...state[action.entityId], ...action.newProps },
  }),
  REFORMAT: (state, action) => reformat(state, action),
};
export default function form(state = defaultState, action = '') {
  const nextReducer = reducers[action.type];

  return nextReducer ? nextReducer(state, action) : state;
}
