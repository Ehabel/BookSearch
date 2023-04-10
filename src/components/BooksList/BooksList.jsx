import React from "react";
import Book from "../Book/Book";
import styles from "./BooksList.module.scss";

const BookList = ({ books }) => {
    return (
        <>
            <div className={styles.card}>
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
                        book={result}
                    />
                ))}
            </div>
        </>
    );
};

export default BookList;
