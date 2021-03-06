import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(ReduxPromise),
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
