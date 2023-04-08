import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadBooks from "./containers/LoadBooks";
import { useState } from "react";

function App() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <SearchBar onSearch={(value) => setSearchValue(value)} />
            <LoadBooks searchTerm={searchValue} />
        </div>
    );
}

export default App;
