import React from "react";
import Book from "./Book";

function Bookshelf(props) {
    //shelfBooks
    //BookshelfName
    //updateBooks

    const shelfBooks = props.shelfBooks;
    const BookshelfName = props.BookshelfName;
    const updateBooks = props.updateBooks;
    const showLoader = props.showLoader;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{BookshelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        shelfBooks.map((data) =>
                            (
                                <li key={data.id}>
                                    <Book showLoader={showLoader} updateBooks={updateBooks} bookData={data}/>
                                </li>
                            )
                        )
                    }
                </ol>
            </div>
        </div>
    );
}

export default Bookshelf;