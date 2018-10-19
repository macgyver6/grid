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
