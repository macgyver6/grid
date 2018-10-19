const defaultAppState = {
  activeTab: 1,
  gridWidth: null,
};
const app = (state = defaultAppState, action) => {
  const actions = {
    default: state,
    SETGRIDWIDTH: {
      ...state,
      gridWidth: action.gridWidth,
    },
  };

  return actions[action.type] || actions.default;
};

export default app;
