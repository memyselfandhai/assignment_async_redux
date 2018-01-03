import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BookList = ({books}) => {
  return (
    <div className="row">
      {books.map(book => {
        return (
          <div
            key={book.best_book[0].small_image_url[0]}
            className="col-xs-4 card"
          >
            <img src={book.best_book[0].small_image_url[0]} />
            <p> Title: {book.best_book[0].title[0]} </p>
            <p> Author: {book.best_book[0].author[0].name[0]} </p>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
