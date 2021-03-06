import React                    from 'react';
import ReactDOM                 from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App                      from './App';
import * as serviceWorker       from './serviceWorker'
import { Provider }             from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter }      from 'connected-react-router';
import { initStore }            from './store/store.config';

const init = (): void => {
  const history = createBrowserHistory();
  const store = initStore(history);
  
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'))
};

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

