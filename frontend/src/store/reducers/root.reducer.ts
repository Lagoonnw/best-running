import { combineReducers }                             from "redux";
import { reducer as settings, State as SettingsState } from './settings.reducer';
import { connectRouter }                               from 'connected-react-router';
import { History }                                     from "history";


// export interface AppState {
//   settings: SettingsState
// }

export const reducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    settings
  })
};
