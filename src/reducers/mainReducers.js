import { flashMessageReducer } from './flashMessageReducer';
import { basketReducer } from './basketReducer';

export const mainReducers = ({ flashMessage, basket }, action) => ({
  basket: basketReducer({ basket }, action).basket,
  flashMessage: flashMessageReducer({ flashMessage }, action).flashMessage
});
