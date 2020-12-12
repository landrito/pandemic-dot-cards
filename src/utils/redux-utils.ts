import { Store } from '@reduxjs/toolkit';
import {
  Action,
  createStore,
  PreloadedState,
  Reducer,
  StoreEnhancer,
} from 'redux';

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<
    unknown,
    Record<string, unknown>
  >;
};

const isReduxDevtoolsExtenstionExist = (
  arg: Window | WindowWithDevTools
): arg is WindowWithDevTools => {
  return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
};

export function createStoreWithDevTools<S, A extends Action>(
  r: Reducer<S, A>,
  s: PreloadedState<S>
): Store<S, A> {
  return createStore(
    r,
    s,
    isReduxDevtoolsExtenstionExist(window)
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
  );
}

// (Reducer
//   reducer,
//   INITIAL_STORE,
//   isReduxDevtoolsExtenstionExist(window)
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : undefined
// );
