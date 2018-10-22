import * as model from '../model/TextInput';

export const setGridWidth = gridWidth => ({
  type: 'SETGRIDWIDTH',
  gridWidth,
});

export const entitySelected = entity => ({
  type: 'ENTITYSELECTED',
  currentEntity: entity,
});

export const resizeStart = resizeTarget => ({
  type: 'RESIZESTART',
  resizeTarget,
});

export const resizeEnd = entity => ({ type: 'RESIZEEND' });

export const entityResized = (entityId, newProps) => ({
  type: 'ENTITYRESIZED',
  entityId,
  newProps,
});

export const addStart = entity => ({
  type: 'ADDSTART',
  entity: model[entity](),
});

export const addEnd = entity => ({
  type: 'ADDEND',
  entity,
});
