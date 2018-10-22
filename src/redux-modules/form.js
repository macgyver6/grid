import * as model from '../model/TextInput';

const defaultState = {
  1: new model.FormSection({ uuid: 1, children: [3, 2] }),
  2: new model.TextInput({ uuid: 2 }),
  3: new model.Padding({ uuid: 3 }),
  // 3: new model.TextInput({ uuid: 3 }),
  // 4: new model.FormSection({ uuid: 4 }),
};

const form = (state = defaultState, action) => {
  const actions = {
    default: state,
    ENTITYRESIZED: {
      ...state,
      [action.entityId]: { ...state[action.entityId], ...action.newProps },
    },
  };

  return actions[action.type] || actions.default;
};

export default form;
