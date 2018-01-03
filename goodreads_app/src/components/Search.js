import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Search = ({onSubmit}) => {
  return (
    <div className="row">
      <div className="col-sm-4 offset-md-4">
        <form
          className="form-group form-inline"
          onSubmit={onSubmit}
          style={{marginTop: "10px"}}
        >
          <input className="form-control" type="text" name="search" />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Search;
