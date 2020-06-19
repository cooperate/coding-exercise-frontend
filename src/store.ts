import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

//export type RootState = ReturnType<typeof rootReducer>;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
  
//export type AppDispatch = typeof store.dispatch

export default () => ( createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))));