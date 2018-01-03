//custom redux and react stuff
import BookList from "../components/BookList";

//*redux store connection stuff
import { connect } from "react-redux";

//*redux store connection stuff
const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    books: state.books,
    isFetching: state.isFetching
  };
};

//*redux store connection stuff
const BookListContainer = connect(mapStateToProps, null)(BookList);

export default BookListContainer;
