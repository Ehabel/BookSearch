import React from "react";
import styles from "./Book.module.scss";

const Book = ({ title, authors, description, thumbnail }) => {
    return (
        <div className={styles.card}>
            <img className={styles.card_image} src={thumbnail} alt={title} />
            <div className={styles.card_text}>
                <p className={styles.card_text_title}>{title}</p>
                <p className={styles.card_text_authors}>By: {authors}</p>
                <p className={styles.card_text_paragraph}>{description}</p>
            </div>
        </div>
    );
};

Book.defaultProps = {
    thumbnail: "No image found",
    title: "N/A",
    authors: "N/A",
    description: "No description found for this book",
};

export default Book;
