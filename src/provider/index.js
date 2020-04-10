import React, { Component } from 'react';

export const myContext = React.createContext();

class Index extends Component {
    constructor(){
        super();
        this.state={
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks: books => {
                const currentlyReading = books.filter(book=>book.shelf==='currentlyReading');
                const wantToRead = books.filter(book=>book.shelf==='wantToRead');
                const read = books.filter(book=>book.shelf==='read');
                this.setState({books, currentlyReading, wantToRead, read});
            },
            moveBook: (book,shelf, newShelfs) => {
                const newBooks = this.state.books.map(eachBook=>{
                    const foundID = newShelfs[shelf].find(
                        bookID => bookID === eachBook.id
                    );

                    if(foundID){
                        eachBook.shelf = shelf;
                    }

                    return eachBook;
                });
                this.state.addBooks(newBooks);
            }
        }
    }

    render(){
        return(
            <myContext.Provider value={this.state}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}

export default Index;