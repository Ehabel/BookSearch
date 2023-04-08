import React from "react";

const Book = ({ title, authors, description, thumbnail }) => {
    return (
        <div>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
            <p>{authors}</p>
            <p>{description}</p>
        </div>
    );
};

Book.defaultProps = {
    thumbnail: "No image found",
    title: "N/A",
    authors: "N/A",
    description: "N/A",
};

export default Book;
