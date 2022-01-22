import React from "react";
import {update} from "../BooksAPI";

function Book(props) {
    //bookData
    //updateBooks
    const book = props.bookData;
    const updateBooks = props.updateBooks;
    const showLoader = props.showLoader;
    // console.log(book)

    // console.log(book.imageLinks.thumbnail)
    let handleDropDown = (event) => {
        const selectedValue = event.target.value;
        showLoader(true);
        update({id: book.id}, selectedValue).then(_ => {
            updateBooks();
        })

    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                     style={{
                         width: 128,
                         height: 193,
                         backgroundSize: "100% 100%",
                         backgroundRepeat: "no-repeat",
                         backgroundImage: `url("${book.imageLinks !== undefined ? book.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}")`
                     }}/>
                <div className="book-shelf-changer">
                    <select onChange={handleDropDown} value={book.shelf !== undefined ? book.shelf : 'none'}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors !== undefined && book.authors.map(author => <div key={author} className="book-authors">{author}</div>)}

        </div>
    );
}

export default Book