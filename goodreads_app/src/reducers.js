import * as Actions from "./actions";

const initialState = {
  books: [],
  isFetching: false,
  error: null
};

export function goodReads(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.data,
        isFetching: false
      };
    case Actions.GET_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_BOOKS_FAILURE:
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
