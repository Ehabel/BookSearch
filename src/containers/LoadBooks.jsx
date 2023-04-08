import { getBooksBySearch } from "../utils/fetch-utils.js";
import BookList from "../components/BooksList/BooksList.jsx";
import { useState, useEffect } from "react";

const LoadBooks = ({ searchTerm }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [resultsNum, setresultsNum] = useState(10);

    const changeMax = (e) => {
        setresultsNum(e.target.value);
    };

    useEffect(() => {
        if (searchTerm !== "") {
            setLoading(true);
            setBooks([]);
            setError(null);
            getBooksBySearch(searchTerm, resultsNum)
                .then((books) => setBooks(books))
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
        }
    }, [resultsNum, searchTerm]);
    return (
        <div>
            {/* <ResultsNum onChange={(value) => setresultsNum(value)} /> */}
            <form>
                <div>
                    <label htmlFor="maxResults">Results per Page: </label>
                    <select
                        name="maxResults"
                        id="maxResults"
                        defaultValue="10"
                        onChange={changeMax}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </select>
                </div>
            </form>
            {loading && <p>...loading</p>}
            {!loading && error && <p>{error.message}</p>}
            {!loading && books.length > 0 && <BookList books={books} />}
        </div>
    );
};

export default LoadBooks;
