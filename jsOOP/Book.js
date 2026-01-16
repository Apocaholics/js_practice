export class Book {
    constructor(title, author, year) {
        this._title = title,
            this._author = author,
            this._year = year
    }

    get title() {
        return this._title
    }

    set title(value) {
        if (typeof (value) != "string") {
            console.log(`${value} is not a string. Title is undefined`)
            this._title = undefined
        } else {
            this._title = value
        }
    }

    get author() {
        return this._author
    }

    set author(value) {
        if (typeof (value) != "string") {
            console.log(`${value} is not a string. Author is undefined`)
            this._author = undefined
        } else {
            this._author = value
        }
    }

    get year() {
        return this._year
    }

    set year(value) {
        if (typeof (value) != "number") {
            console.log(`${value} is not a number. Year is undefined`)
            this._year = undefined
        } else {
            this._year = value
        }
    }

    printInfo() {
        console.log(`Book: ${this._title} \nAuthor: ${this._author} \nYear: ${this._year}`)
    }

    static getOdlestBook(books) {
        if (!books.length) {
            console.log("Books list is empty")
            return 0
        }

        if (!this.#isBooksListHasBook(books)) {
            console.log("List don't have any book")
            return 0
        }

        let oldestYear = new Date().getFullYear()
        let oldestBook

        for (const book of books) {
            if (book.year < oldestYear) {
                oldestYear = book.year
                oldestBook = book
            }
        }

        return oldestBook
    }

    static #isBooksListHasBook(books) {
        let bookCounter = 0

        for (const book of books) {
            if (book instanceof Book) {
                bookCounter++
            }
        }

        if (bookCounter != 0) {
            return true
        } else {
            return false
        }
    }
}
