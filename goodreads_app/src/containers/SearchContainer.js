import React, {Component} from "react";

//custom redux and react stuff
import serialize from "form-serialize";
import Search from "../components/Search";
import {searchAction} from "../actions";

//*redux store connection stuff
// Import the connect function from React-Redux
import {connect} from "react-redux";

class SearchContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return <Search onSubmit={this.props.onSubmit} />;
  }
}
// Map dispatch to props to create a submit function that
// dispatches creating a puppy
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();

      const form = e.target;
      const data = serialize(form, {hash: true});
      console.log("data => ", data);
      dispatch(searchAction(data));
      form.reset();
    }
  };
};

//*redux store connection stuff
// Generate the AddPuppyContainer which renders AddPuppy
// with all the new props. We don't need to map state to
// props so we just send `null` in its place.

export default connect(null, mapDispatchToProps)(SearchContainer);
