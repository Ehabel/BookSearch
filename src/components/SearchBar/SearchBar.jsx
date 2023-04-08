import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
        setInput("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={onInputChange} type="text" value={input} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
