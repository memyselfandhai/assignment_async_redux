import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Search = ({ onSubmit }) => {
  return (
    <form className="form-group" onSubmit={onSubmit}>
      <input className="form-control" type="text" name="search" />
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default Search;
