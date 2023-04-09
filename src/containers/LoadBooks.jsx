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

    const getBooks = async (searchTerm, resultsNum) => {
        setBooks(await getBooksBySearch(searchTerm, resultsNum));
    };

    useEffect(() => {
        if (searchTerm !== "") {
            setLoading(true);
            setError(null);
            getBooks(searchTerm, resultsNum)
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
        }
    }, [resultsNum, searchTerm]);
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="resultsGenerated">Results per Page: </label>
                    <select
                        name="resultsGenerated"
                        id="resultsGenerated"
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
            {loading && (
                <div>
                    <p>...loading</p>
                    <BookList books={books} />
                </div>
            )}
            {!loading && error && <p>{error.message}</p>}
            {!loading && books.length > 0 && <BookList books={books} />}
        </div>
    );
};

export default LoadBooks;
