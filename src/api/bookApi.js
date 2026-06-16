export const searchBooks = async (query) => {
    const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
    );
    const data = await res.json();
    return data.docs.slice(0, 10);
};