
function bookDictionary() {
    var book = {   // An object containing key-value pairs about the book
        title: "Tha Martian",
        director: "Andy Weir",
        genre: "Science Fiction",
        publishedYear: 2011
    };
    delete book.genre; // Delete the 'genre' key-value pair from the object
    document.getElementById("Dictionary").innerHTML = book.genre; // Since the key was deleted, this will show undefined
}