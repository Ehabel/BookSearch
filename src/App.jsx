import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadBooks from "./containers/LoadBooks";
import { useState } from "react";

function App() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className="main">
            <div>
                <SearchBar onSearch={(value) => setSearchValue(value)} />
            </div>
            <LoadBooks searchTerm={searchValue} />
        </div>
    );
}

export default App;
