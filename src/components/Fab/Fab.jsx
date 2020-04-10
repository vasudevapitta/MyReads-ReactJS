import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Fab.styles';
import { Link } from 'react-router-dom';

class Fab extends Component{
  render(){
    return <div className="open-search">
    <Link to="/Search" onClick={() => this.setState({ showSearchPage: true })}><button>Add a book</button></Link>
    </div>
  }
}

export default Fab;