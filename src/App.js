import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BookList} from './components/BookList'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

const BOOK_LIST = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books : []
    }
    console.log(this);
  }


  componentDidMount() {
    fetch(BOOK_LIST).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json);

      this.setState({
        books : json

      })
      console.log(json);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <BookList books = {this.state.books}/>
        <Footer />
      </div>
    )
  }
}

export default App;
