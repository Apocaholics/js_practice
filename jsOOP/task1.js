import { Book } from "./Book.js"
import { EBook } from "./EBook.js"

const book1 = new Book("Title1", "Author1", 1990)
const book2 = new Book("Title2", "Author2", 1956)
const book3 = new Book("Title3", "Author3", 2008)
const book4 = new Book("Title4", "Author4", 1965)

const eBook1 = new EBook("EBook Title1", "EBook Author1", 1199, "epub")
const eBook2 = new EBook("EBook Title2", "EBook Author2", 1987, "pdf")

const books = [book1, book2, eBook1, book3, eBook2, book4]
const books2 = [34, "foo", "bar"]

book1.printInfo()
book2.printInfo()
book3.printInfo()
book4.printInfo()

eBook1.printInfo()
eBook2.printInfo()

const transformedEBook = EBook.transformToEBook(book1, "epub")

console.log(transformedEBook.constructor.name)
console.log(`Book ${transformedEBook.title} is now available in digital format ${transformedEBook.fileFormat}`)

const oldestBook = Book.getOdlestBook(books)
console.log(`Oldest book is: ${oldestBook.title}. And it's a ${oldestBook.constructor.name}`)