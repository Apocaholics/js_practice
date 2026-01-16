import { Book } from "./Book.js"

export class EBook extends Book {

    constructor(title, author, year, fileFormat) {
        super(title, author, year),
            this._fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat
    }

    set fileFormat(value) {
        this._fileFormat = value
    }

    printInfo() {
        console.log(`Book: ${this._title} \nAuthor: ${this._author} \nYear: ${this._year} \nFile format: ${this._fileFormat}`)
    }

    static transformToEBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            console.log(`${book} isn't a book`)
            return 0
        }

        if (typeof (fileFormat) != "string") {
            console.log(`${fileFormat} isn't a digital book format`)
            return 0
        }

        return new EBook(book.title, book.author, book.year, fileFormat)
    }
}
