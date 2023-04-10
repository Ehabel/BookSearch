import React from "react";
import styles from "./BookModal.module.scss";
import closeLogo from "../../assets/close.svg";

const BookModal = ({
    title,
    authors,
    description,
    thumbnail,
    onChange,
    book,
}) => {
    const closeModalView = () => {
        onChange();
    };
    return (
        <div className={styles.modalContainer}>
            <div className={styles.outsideModal} onClick={closeModalView}></div>
            <div className={styles.card}>
                <div className={styles.card_text}>
                    <img
                        className={styles.card_image}
                        src={thumbnail}
                        alt={title}
                    />
                    <div>
                        <div className={styles.card_text_container}>
                            <p className={styles.card_text_container_header}>
                                Title:
                            </p>
                            <p>{title}</p>
                            <p className={styles.card_text_container_header}>
                                Subtitle:
                            </p>
                            <p>
                                {book.volumeInfo.subtitle
                                    ? book.volumeInfo.subtitle
                                    : "No subtitle"}
                            </p>
                            <p className={styles.card_text_container_header}>
                                By:
                            </p>
                            <p>{authors}</p>
                            <p className={styles.card_text_container_header}>
                                Genres:
                            </p>
                            <p>
                                {book.volumeInfo.categories
                                    ? book.volumeInfo.categories
                                    : "No Genres"}
                            </p>
                            <p className={styles.card_text_container_header}>
                                Language:
                            </p>
                            <p>
                                {book.volumeInfo.language
                                    ? book.volumeInfo.language
                                    : "No language found"}
                            </p>
                            <p className={styles.card_text_container_header}>
                                Rating:
                            </p>
                            <p>
                                {book.volumeInfo.maturityRating
                                    ? book.volumeInfo.maturityRating
                                    : "No rating"}
                            </p>
                            <p className={styles.card_text_container_header}>
                                Pages:
                            </p>
                            <p>
                                {book.volumeInfo.pageCount
                                    ? book.volumeInfo.pageCount
                                    : "No page count"}
                            </p>
                            <p className={styles.card_text_container_header}>
                                Publisher:
                            </p>
                            <p>
                                {book.volumeInfo.publisher
                                    ? book.volumeInfo.publisher
                                    : "No publisher found"}
                            </p>
                            <p className={styles.card_text_container_header}>
                                Published:
                            </p>
                            <p>
                                {book.volumeInfo.publishedDate
                                    ? book.volumeInfo.publishedDate
                                    : "No published date"}
                            </p>
                            <p className={styles.card_text_container_header}>
                                Description:
                            </p>
                            <p>{description}</p>
                            <p className={styles.card_text_container_header}>
                                Link:
                            </p>
                            <a href={book.volumeInfo.canonicalVolumeLink}>
                                Visit Google Books page.
                            </a>
                        </div>
                    </div>
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
