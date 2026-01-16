import { Book } from "./Book.js"

let book1 = new Book("Title1", "Author1", 1990)
let book2 = new Book("Title2", "Author2", 1956)
let book3 = new Book("Title3", "Author3", 2008)
let book4 = new Book("Title4", "Author4", 1965)

const books = [book1, book2, book3, book4]
const books2 = [34, "foo", "bar"]

// book1.printInfo()
// book2.printInfo()
// book3.printInfo()
// book4.printInfo()

let oldestBook = Book.getOdlestBook(books2)
console.log(`Oldest book is: ${oldestBook.title}`)