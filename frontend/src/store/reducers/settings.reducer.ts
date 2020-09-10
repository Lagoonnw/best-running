import { Action, handleActions } from 'redux-actions';

export interface State {
  theme: string
}

const initialState: State = {
  theme: 'dark'
}

export const reducer = handleActions({

}, initialState);
