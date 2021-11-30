const books = [
    {
        name: "The Princess Bride",
        genre: "Fantasy", 
        author: "William Goldman"
    },
    {
        name: "The Princess Bride",
        genre: "Horror", 
        author: "Romy Greenfield"
    },
    {
        name: "Other",
        genre: "Not Fantasy", 
        author: "Some bloke"
    },
    {
        name: "Artemis Fowl",
        genre: "Fantasy", 
        author: "Eoin Colfer"
    },
    {
        name: "Test book",
        genre: "Test genre", 
        author: "Test author"
    }
];

const getBooksByGenre = (genre) => {
    const result = books.filter((book) => {
        return book.genre === genre
    })
    return result;
}

module.exports = {
    getBooksByGenre
}