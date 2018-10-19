import * as model from '../model/TextInput';

const defaultState = {
  1: new model.FormSection({ children: [2, 3] }),
  2: new model.TextInput(),
  3: new model.TextInput(),
};

const form = (state = defaultState, action) => {
  return state;
};

export default form;
