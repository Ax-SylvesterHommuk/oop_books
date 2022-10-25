class LS {
    addBook(book){
        //set data to the LS
        let books;
        if(localStorage.getItem("books") === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        books.push(book);
        localStorage.setItem("tasks", JSON.stringify(books));
        //log to console that task is added to LS
        book.addedToLS();
    }
}