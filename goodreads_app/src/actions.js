export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export function getBooksRequest() {
  return {
    type: GET_BOOKS_REQUEST
  };
}

// Sends successful data response to reducer
export function getBooksSuccess(data) {
  return {
    type: GET_BOOKS_SUCCESS,
    data
  };
}

// Sends the response error to the reducer
export function getBooksFailure(error) {
  return {
    type: GET_BOOKS_FAILURE,
    error
  };
}

export function searchAction(data) {
  return dispatch => {
    dispatch(getBooksRequest());

    fetch(`api/goodreads/all/${data}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("json => ", json);
        dispatch(getBooksSuccess(json));
      })
      .catch(error => {
        dispatch(getBooksFailure(error));
      });
  };
}
