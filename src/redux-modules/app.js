const defaultAppState = {
  activeTab: 1,
  gridWidth: null,
  isResizing: false,
};
const app = (state = defaultAppState, action) => {
  const actions = {
    default: state,
    SETGRIDWIDTH: { ...state, gridWidth: action.gridWidth },
    RESIZESTART: { ...state, isResizing: true },
    RESIZEEND: { ...state, isResizing: false },
    ADDSTART: { ...state, isAddingInput: action.entity },
    DRAGSTART: {
      ...state,
      isDragging: {
        targetUUID: action.targetUUID,
        sectionUUID: action.sectionUUID,
        metaData: action.metaData,
      },
    },
    ADDEND: { ...state, isAddingInput: false },
    DRAGEND: { ...state, isDragging: false },
    // DROP: console.log('hit'),
    SETDROPTARGET: {
      ...state,
      dropTarget: {
        targetUUID: action.targetUUID,
        sectionUUID: action.sectionUUID,
        metaData: action.metaData,
      },
    },
  };

  return actions[action.type] || actions.default;
};

export default app;
