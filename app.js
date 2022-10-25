//UI and LS objects

ui = new UI();
ls = new LS();

const form = document.querySelector("form");
const taskInput = document.querySelector("#book-list");

form.addEventListener("submit", addBook);

function addBook(e) {
    const book = new Book(taskInput.value);

    ui.addBook(book);

    ls.addBook(Book);
    e.preventDefault();
}