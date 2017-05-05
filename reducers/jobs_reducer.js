import { 
  FETCH_JOBS
} from '../actions/types';

const INITIAL_STATE = {
  results: []
};

export default function(state, actions) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    default: 
      return state;
  }
}