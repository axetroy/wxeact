import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import reduxPersist from '../config/redux-persist';
import * as StartupActions from './startup';

/**
 * 创建store
 * @param rootReducer
 * @param rootSaga
 * @returns {*}
 */
export default function(rootReducer, rootSaga) {
  const middleware = [];
  const enhancers = [];

  // log中间件
  const SAGA_LOGGING_BLACKLIST = [
    'EFFECT_TRIGGERED',
    'EFFECT_RESOLVED',
    'EFFECT_REJECTED'
  ];
  if (__DEV__) {
    const logger = createLogger({
      predicate: (getState, { type }) =>
        SAGA_LOGGING_BLACKLIST.indexOf(type) === -1
    });
    middleware.push(logger);
  }

  // 合并中间件
  enhancers.push(applyMiddleware(...middleware));

  // persist rehydrate
  enhancers.push(autoRehydrate());

  const store = createStore(rootReducer, compose(...enhancers));

  // persist
  persistStore(store, reduxPersist, () =>
    store.dispatch(StartupActions.startup())
  );

  return store;
}
