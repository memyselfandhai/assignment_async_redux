import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BookList = ({ books }) => {
  return (
    <div className="row">
      {books.map(book => {
        return (
          <div key={Math.random()} className="col-md-3 offset-md-1">
            <img src={book.best_book[0].small_image_url[0]} />
            <a
              href={
                "http://www.goodreads.com/book/show/" +
                book.best_book[0].id[0]._
              }
            >
              <div> Title: {book.best_book[0].title[0]} </div>
            </a>
            <div> Author: {book.best_book[0].author[0].name[0]} </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
