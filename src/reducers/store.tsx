import { createStore, Store } from 'redux';
import rootReducer from '.';
import { UserAction, RootState } from './types';

export default function configureStore(): Store<RootState, UserAction> {
  const initialState = {};
  const store = createStore(
    rootReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
