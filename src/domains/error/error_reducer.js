// import { Map } from 'immutable';
import { ACTION_ERROR_NOT_FOUND } from './error_actions';

export function errorReducer(state = new Map(), action) {
  switch (action.type) {
    case ACTION_ERROR_NOT_FOUND: {
      const newState = new Map(Object.entries(state));

      newState.set('error', action.type);

      return newState;
    }

    default: {
      return state;
    }
  }
}
