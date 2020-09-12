export const flashMessageReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return {
        flashMessage: action.value || ''
      };

    case 'DELETE_MESSAGE':
      return {
        flashMessage: ''
      };

    default:
      return state;
  }
};
