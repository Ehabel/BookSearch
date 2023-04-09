import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadBooks from "./containers/LoadBooks";
import { useState } from "react";

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="main">
            <div className="main__child">
                <div className="main__child__text">
                    <h1 className="main__child__header">BookSearch</h1>
                    <p className="main__child__para">
                        An app for finding books
                    </p>
                </div>
                <div className="bottom">
                    <div className="searchbar">
                        <SearchBar
                            onSearch={(value) => setSearchValue(value)}
                        />
                    </div>
                    <LoadBooks searchTerm={searchValue} />
                </div>
            </div>
        </div>
    );
}

export default App;
