import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Book from "./Book";
import {search} from "../BooksAPI";

function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    let history = useHistory();
    let books = props.books;

    let updateBooks = props.updateBooks;
    let showLoader = props.showLoader;

    let handleValueChange = (event) => {
        const searchQuery = event.target.value;
        setSearchValue(searchQuery);
        searchForBooks(searchQuery);
    }

    useEffect(() => {
        searchForBooks(searchValue);
    }, [books])

    const searchForBooks = (searchQuery) => {
        search(searchQuery).then((data) => {
            if (data !== undefined && !data.error) {
                handleBookStatus(data);
            } else setTimeout(() => {
                setSearchResult([]);
            }, 200)
        })
    }

    const handleBookStatus = (searchResult) => {
        let bookResult = [...searchResult];
        bookResult.forEach((book) => {
            let filterResult = books.filter((data) => (data.id === book.id));
            filterResult.forEach((result, _) => {
                bookResult[bookResult.findIndex((x) => x.id === result.id)].shelf = result.shelf;
            })
        })
        setSearchResult(bookResult);
    }

    return (<div className="search-books">
        <div className="search-books-bar">
            <button className="close-search" onClick={() => history.push('/')}>Close</button>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={searchValue}
                       onChange={handleValueChange}/>
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                {searchResult.length > 0
                    ? searchResult.map(book =>
                        <li key={book.id}><Book showLoader={showLoader} updateBooks={updateBooks} bookData={book}/></li>
                    )
                    : <p style={{fontSize: '18px', color: '#bfbfbf'}}>No data found</p>
                }
            </ol>
        </div>
    </div>);
}

export default Search;