import React, {Component} from "react";

//custom redux and react stuff
import serialize from "form-serialize";
import Search from "../components/Search";
import {search} from "../actions";
import {bindActionCreators} from "redux";

//*redux store connection stuff
// Import the connect function from React-Redux
import {connect} from "react-redux";

class SearchContainer extends Component {
  constructor(props) {
    super();
  }

  onSubmit() {
    e.preventDefault();

    const form = e.target;
    const data = serialize(form, {hash: true});

    dispatch(createItem(data));
    form.reset();
  }

  render() {
    return <Search onSubmit={this.onSubmit} />;
  }
}
// Map dispatch to props to create a submit function that
// dispatches creating a puppy
const mapDispatchToProps = dispatch => {
  // Create an object with the action creators
  // (or, import them as a named object)
  const actions = {
    search
  };

  // Returns exactly the same code as above
  return bindActionCreators(actions, dispatch);
};

//*redux store connection stuff
// Generate the AddPuppyContainer which renders AddPuppy
// with all the new props. We don't need to map state to
// props so we just send `null` in its place.

export default connect(null, mapDispatchToProps)(SearchContainer);
