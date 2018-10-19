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
  };

  return actions[action.type] || actions.default;
};

export default app;
