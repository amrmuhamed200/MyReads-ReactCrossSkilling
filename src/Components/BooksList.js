import React from "react";
import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom";

function BooksList(props) {
    //books
    //updateBooks
    const books = props.books;
    const updateBooks = props.updateBooks;
    const showLoader = props.showLoader;

    let filterBySelfType = (shelfKey) => {
        return books.filter((book) => (
            book['shelf'] === shelfKey
        ))
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf showLoader={showLoader} updateBooks={updateBooks} shelfBooks={filterBySelfType("currentlyReading")}
                               BookshelfName={"Currently Reading"}/>
                    <Bookshelf showLoader={showLoader} updateBooks={updateBooks} shelfBooks={filterBySelfType("wantToRead")}
                               BookshelfName={"Want to Read"}/>
                    <Bookshelf showLoader={showLoader} updateBooks={updateBooks} shelfBooks={filterBySelfType("read")} BookshelfName={"Read"}/>
                </div>
            </div>
            <div className="open-search">
                <Link className="open-button" to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default BooksList;