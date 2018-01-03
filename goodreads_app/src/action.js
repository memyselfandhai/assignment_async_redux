export const SEARCH = "SEARCH";
export const GET_RESULTS_REQUEST = "GET_RESULTS_REQUEST";
export const GET_RESULTS_SUCCESS = "GET_RESULTS_SUCCESS";
export const GET_RESULTS_FAILURE = "GET_RESULTS_FAILURE";

export function search(data) {
  return dispatch => {
    console.log(data);
    // fetch("/api/goodreads/, );
  };
}
