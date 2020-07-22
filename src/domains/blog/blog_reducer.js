// import { Map, fromJS } from 'immutable';
import { ACTION_BLOG_FETCHED } from './blog_actions';

export function blogReducer(state = new Map(), action) {
  switch (action.type) {
    case ACTION_BLOG_FETCHED: {
      return { ...action.data.blog };
    }

    default: {
      return state;
    }
  }
}
