import { bindActionCreators } from 'redux';

export const setGridWidth = gridWidth => ({
  type: 'SETGRIDWIDTH',
  gridWidth: gridWidth,
});

export const entitySelected = entity => ({
  type: 'ENTITYSELECTED',
  currentEntity: entity,
});
