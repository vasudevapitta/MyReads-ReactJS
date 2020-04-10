import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Book.styles';
import { update } from '../../BooksAPI';

class Book extends Component{
  handleShelfChange= async e=>{
    try {
      const shelf = e.target.value;
      const book = this.props;
      const result = await update(book, shelf);
      this.props.moveBook(book, shelf, result);
    }
    catch(err){
      console.log(err);
    }
  }

  render(){
    const currentlyReading = this.props.currentlyReading;

    return <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.imageLinks ? this.props.imageLinks.thumbnail : ''}")` }}></div>
      <div className="book-shelf-changer">
        <select onChange={this.handleShelfChange} value={this.props.shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{this.props.title ? this.props.title:''}</div>
    <div className="book-authors">{this.props.authors ? this.props.authors.map(author=>author): 'Unknown'}</div>
  </div>
  }
}

export default Book;