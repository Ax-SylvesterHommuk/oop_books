class Book{
    constructor(name, title, author, isbn){
        this.name = name
        this.title = title
        this.author = author
        this.isbn = isbn
    }
    addedToUI(){
        console.log(this.name + " is added to UI")
    }
    addedToLS(){
        console.log(this.name + " is added to LS")
    }
}