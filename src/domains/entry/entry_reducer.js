// import { fromJS, Map } from 'immutable';
import { ACTION_ENTRY_FETCHED, ACTION_LIKE_UPDATED } from './entry_actions';

export function entryReducer(state = new Map(), action) {
  switch (action.type) {
    case ACTION_ENTRY_FETCHED: {
      return { ...action.data.entry };
    }

    case ACTION_LIKE_UPDATED: {
      const newState = new Map(Object.entries(state));

      newState.set('like_count', action.data.likeCount);

      return newState;
    }

    default: {
      return state;
    }
  }
}
