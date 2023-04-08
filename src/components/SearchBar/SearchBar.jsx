import { useState } from "react";
import styles from "./SearchBar.module.scss";
import searchLogo from "../../assets/search.svg";

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
        <form className={styles.card} onSubmit={handleSubmit}>
            <input
                className={styles.card__searchbar}
                onChange={onInputChange}
                type="text"
                value={input}
            />
            <button type="submit">
                {" "}
                <img className={styles.card__logo} src={searchLogo} alt="" />
            </button>
        </form>
    );
};

export default SearchBar;
