export const getBooksBySearch = async (searchTerm, maxResults = 10) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}`
    );
    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    const { items } = data;
    if (items.length < 1) {
        throw new Error("No books found for search term " + searchTerm);
    }
    // console.log(items);
    // console.log(maxResults);
    // console.log(items.volumeInfo);
    // console.log(items[0].volumeInfo.imageLinks);

    return items;
};
