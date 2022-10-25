class UI {
    addBook(book){
        //create list item
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(book.name))
        //create link
        const link = document.createElement("a");
        link.className = "secondary-content";
        link.appendChild(document.createTextNode("X"));
        link.setAttribute("href", "#");
        // add link to list item
        li.appendChild(link);
        //find list to add created list item
        const list = document.querySelector("ul");
        list.appendChild(li);
        //find input to clear this value
        const input = document.querySelector("#book-list");
        input.value = "";
        // log to console that task is added to UI
        book.addedToUI();
    }
}