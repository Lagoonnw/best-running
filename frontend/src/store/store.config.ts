import { createStore, applyMiddleware, Store } from 'redux';
import { compose }                             from "recompose";
import createSagaMiddleware                    from 'redux-saga';
import { routerMiddleware }                    from 'connected-react-router';
import { reducer }                             from "./reducers/root.reducer";

// @ts-ignore
export const initStore = (history): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  // @ts-ignore
  const composedEns = compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // @ts-ignore
  return createStore(reducer(history), composedEns);
}
