import React from "react";
import styles from "./Book.module.scss";
import { useState } from "react";
import BookModal from "../BookModal/BookModal.jsx";

const Book = ({ title, authors, description, thumbnail, book }) => {
    const [openModal, setopenModal] = useState(false);
    const openModalView = () => {
        setopenModal(true);
    };
    const closeModalView = () => {
        setopenModal(false);
    };
    return (
        <>
            <div className={styles.card} onClick={openModalView}>
                <img
                    className={styles.card_image}
                    src={thumbnail}
                    alt={title}
                />
                <div className={styles.card_text}>
                    <p className={styles.card_text_title}>{title}</p>
                    <p className={styles.card_text_authors}>By: {authors}</p>
                    <p className={styles.card_text_paragraph}>{description}</p>
                </div>
            </div>
            {openModal ? (
                <BookModal
                    title={title}
                    authors={authors}
                    description={description}
                    thumbnail={thumbnail}
                    onChange={closeModalView}
                    book={book}
                />
            ) : (
                <></>
            )}
        </>
    );
};

Book.defaultProps = {
    thumbnail: "No image found",
    title: "N/A",
    authors: "N/A",
    description: "No description found for this book",
};

export default Book;
