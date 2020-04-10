# React JS - My Reads - Project
This is a React project - which is part of the Udacity Front End Developer Nanodegree

## Instructions

To get started:
* Download or clone the repo and cd into the project folder
* Run npm install
* Then npm start

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Learn more about [React](https://reactjs.org/docs/getting-started.html)
Starter files and backend were provided by Udacity for _all_ it's students.
Therefore Pull requests are not accepted.

Everything else was developed by [me](https://github.com/vasudevapitta)

# Project Specifications

## Main Page
* The main page shows 3 shelves for books.
* The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance.
* Information persist between page refreshes i.e. when the browser is refreshed, the same information is displayed on the page.

## Search Page
* The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
* Search results on the search page allow the user to select "currently reading", "want to read", or "read" to place the book in a certain shelf.
* When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.

## Routing
The main page contains a links to Currently Reading, Want to Read, Read and search page.

## Backend Server
The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:
* getAll
* update
* search

## getAll
Method Signature:

## getAll()
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

## update
Method Signature:

## update(book, shelf)
* book: containing at minimum an id attribute
* shelf: contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

## search
Method Signature:

## search(query)
* query:
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
