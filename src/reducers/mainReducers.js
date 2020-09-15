import { flashMessageReducer } from './flashMessageReducer';
import { basketReducer } from './basketReducer';
import { userReducer } from './userReducer';

export const mainReducers = ({ flashMessage, basket, user }, action) => ({
  basket: basketReducer({ basket }, action).basket,
  flashMessage: flashMessageReducer({ flashMessage }, action).flashMessage,
  user: userReducer({ user }, action).user
});
