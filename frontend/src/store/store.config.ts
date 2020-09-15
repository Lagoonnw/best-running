import { createStore, applyMiddleware, Store } from 'redux';
import { compose }                             from 'recompose';
import createSagaMiddleware                    from 'redux-saga';
import { routerMiddleware }                    from 'connected-react-router';
import { reducer }                             from './reducers/root.reducer';
import { History }                             from 'history';
import { root }                                from './sagas/root';

export const initStore = (history: History): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  // @ts-ignore -> ts window and redux dev tolls
  const composedEns = compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // @ts-ignore -> earlier ignore block
  const store = createStore(reducer(history), composedEns);
  
  //run sagas
  sagaMiddleware.run(root);
  
  return store;
}
