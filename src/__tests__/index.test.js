const { getBooksByGenre } = require("../index.js");

describe("testing the getBooksByGenre function", () => {
    it("returns an array", () => {
        expect(Array.isArray(getBooksByGenre())).toEqual(true)
    });
    test("returns an empty array when there are no books with that genre", () => {
        expect(getBooksByGenre("Crime/Thriller")).toEqual([])
    });
    it("returns the right books when the genre does exist", () => {
        expect(getBooksByGenre("Horror")).toEqual([
            {
                name: "The Princess Bride",
                genre: "Horror", 
                author: "Romy Greenfield"
            }
        ])
    });
});


