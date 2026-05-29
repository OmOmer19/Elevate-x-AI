import { useState,createContext, useCallback } from "react";

const SavedContext = createContext()

function SavedProvider({children}){
    const [savedBooks,setSavedBooks] = useState([])

    //savebook function using useCallback so recreate only when savebooks change
    const saveBook = useCallback((book) =>{
        // if alreadt saved
        const alreadySaved = savedBooks.find((b) => b.id === book.id)
        if(alreadySaved){
            alert("Book already saved!")
            return
        }
        // adding the n=book to saved array
        setSavedBooks([...savedBooks,book])
    },[savedBooks])
    // to remove book function
    const removeBook = useCallback((book) =>{
        //filtering the book with id
        const filtered = savedBooks.filter((b) => b.id !== book.id)
        setSavedBooks(filtered)
    },[savedBooks])

    return(
        <SavedContext.Provider value={{savedBooks,saveBook,removeBook}}>
            {children}
        </SavedContext.Provider>
    )
}
export {SavedContext,SavedProvider}