import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Shelf.styles';
import Book from '../Book/';

class Shelf extends Component{
  render(){  
    return <div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          {this.props.books.map(book=><Book key={book.id} {...book} moveBook={this.props.moveBook}/>)}
        </li>
      </ol>
    </div>
  </div>
  }
}

export default Shelf;