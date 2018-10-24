import * as model from '../model/TextInput';
import { utility } from '../lib/utility';
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

export const dragStart = (targetUUID, sectionUUID, metaData) => ({
  type: 'DRAGSTART',
  targetUUID,
  sectionUUID,
  metaData,
});

export const dragEnd = entity => ({
  type: 'DRAGEND',
  entity,
});

export const setDropTarget = (targetUUID, sectionUUID) => ({
  type: 'SETDROPTARGET',
  targetUUID,
  sectionUUID,
});

export const drop = (targetUUID, sectionUUID, metaData) => (
  dispatch,
  getState
) => {
  const appState = getState().app;
  const siblings = getState().form[sectionUUID].children;
  const target = getState().form[targetUUID];
  const dragDistance = utility.round(
    (metaData.screenX - appState.isDragging.metaData.screenX) /
      appState.gridWidth,
    0
  );

  dispatch(setDropTarget({ targetUUID, sectionUUID, metaData }));

  const profileDrop = {
    // sameSection: sectionUUID === appState.isDragging.sectionUUID,
    reformat:
      Math.abs(
        siblings.indexOf(targetUUID) -
          siblings.indexOf(appState.isDragging.targetUUID)
      ) === 1 && target.type === 'Padding',
    somethingElse: false,
  };
  const actionToApply = Object.keys(profileDrop).filter(
    key => profileDrop[key]
  )[0];

  const actions = {
    reformat: reformat(
      targetUUID,
      appState.isDragging.targetUUID,
      sectionUUID,
      dragDistance
    ),
  };

  dispatch(actions[actionToApply]);
};

export const reformat = (
  dropTargetUUID,
  dragTargetUUID,
  sectionUUID,
  dragDistance
) => ({
  type: 'REFORMAT',
  dropTargetUUID,
  dragTargetUUID,
  sectionUUID,
  dragDistance,
});
