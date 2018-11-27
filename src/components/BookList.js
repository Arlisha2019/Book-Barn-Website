import React, { Component } from 'react';
import './BookList.css'

const IMAGES_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"

export class BookList extends Component {

  render() {

    let bookItems =
    this.props.books.map(function(book,index) {
      return <li className="bookItems" key={index}>
        <img className = "image" src={`${IMAGES_URL}${book.imageLink}`} />
        <h5 className="title">{book.title}</h5>
        <h5 className="author">Author: {book.author}</h5>
        <h5 className="year"> Year: {book.year}</h5>
        <h5 className="bookLink"><a href={book.link}> Book Bio </a></h5>
    </li>

    })

      return (
        <div>
          <h1> {bookItems} </h1>
        </div>
      )

    }
  }
