import * as Actions from "./actions";

const initialState = {
  results: [],
  isFetching: false,
  error: null
};

export function goodReads(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.data,
        isFetching: false
      };
    case Actions.GET_RESULTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_RESULTS_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}
