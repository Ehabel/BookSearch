import React from "react";
import styles from "./BookModal.module.scss";
import closeLogo from "../../assets/close.svg";

const BookModal = ({ title, authors, description, thumbnail, onChange }) => {
    const closeModalView = () => {
        onChange();
    };
    return (
        <div className={styles.modalContainer}>
            <div className={styles.card}>
                <div className={styles.card_text}>
                    <img
                        className={styles.card_image}
                        src={thumbnail}
                        alt={title}
                    />
                    <p className={styles.card_text_title}>{title}</p>
                    <p className={styles.card_text_authors}>By: {authors}</p>
                    <p className={styles.card_text_paragraph}>{description}</p>
                </div>
                <div onClick={closeModalView}>
                    <img className={styles.img} src={closeLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

BookModal.defaultProps = {
    thumbnail: "No image found",
    title: "N/A",
    authors: "N/A",
    description: "No description found for this book",
};

export default BookModal;
