import React, {useEffect} from 'react'
import './App.css'
import {Route} from "react-router-dom";
import {getAll} from "./BooksAPI";
import BooksList from "./Components/BooksList";
import Search from "./Components/Search";

function BooksApp() {
    const [books, setBooks] = React.useState([]);
    const [loader, setShowLoader] = React.useState(false);

    const getAllBooks = () => {
        showLoader(true);
        getAll().then((data) => {
            setBooks(data);
            showLoader(false)
        })
    }

    const showLoader = (value) => {
        setShowLoader(value);
    }

    useEffect(() => {
        getAllBooks();
    }, [])


    const updateBooks = async () => {
        getAllBooks();
    }

    return (
        <div className="app">

            {loader && <div className={'loader'}/>}

            <Route exact path="/" render={() => (
                <BooksList showLoader={showLoader} books={books} updateBooks={updateBooks}/>
            )}/>

            <Route path="/search" render={() => (
                <Search showLoader={showLoader} books={books} updateBooks={updateBooks}/>
            )}/>
        </div>
    )
}

export default BooksApp
