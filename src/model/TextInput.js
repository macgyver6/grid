const uuidv4 = require('uuid/v4');

const defaultProperties = {
  prepend: 0,
  width: 24,
  append: 0,
};

export function TextInput(properties) {
  const TextInputDefault = {
    type: 'TextInput',
    uuid: uuidv4(),
    prepend: 2,
    width: 6,
    append: 16,
  };
  return { ...defaultProperties, ...TextInputDefault, ...properties };
}

export function FormSection(properties) {
  const FormSectionDefault = {
    type: 'FormSection',
    width: 24,
    children: [],
    uuid: uuidv4(),
  };
  return { ...defaultProperties, ...FormSectionDefault, ...properties };
}
