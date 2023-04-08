import React from "react";
import Book from "../Book/Book";

const BookList = ({ books }) => {
    return (
        <>
            {books.map((result) => (
                <Book
                    key={result.id}
                    title={result.volumeInfo.title}
                    authors={result.volumeInfo.authors}
                    description={result.volumeInfo.description}
                    thumbnail={
                        result.volumeInfo.imageLinks
                            ? result.volumeInfo.imageLinks.thumbnail
                            : "N/A"
                    }
                />
            ))}
        </>
    );
};

export default BookList;
