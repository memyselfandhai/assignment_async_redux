import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BookList = ({ books }) => {
  return (
    <div className="row">
      {books.map(book => {
        <div className="col-xs-4 card">
          <img src={book.best_book[0].small_image_url} />
          <p> Title: {book.best_book[0].title} </p>
          <p> Author: {book.best_book[0].author} </p>
        </div>;
      })}
    </div>
  );
};

export default Booklist;

