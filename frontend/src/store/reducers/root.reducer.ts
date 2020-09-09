import { combineReducers }                             from "redux";
import { reducer as settings, State as SettingsState } from './settings.reducer';
import { connectRouter }                               from 'connected-react-router';
import { HashHistoryOptions }                          from "history";


// export interface AppState {
//   settings: SettingsState
// }

// TODO: tslint

//@ts-ignore
export const reducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    settings
  })
};
