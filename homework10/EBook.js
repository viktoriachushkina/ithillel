const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    // Геттеры и сеттеры для властивості format
    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== 'string') throw new Error('Формат повинен бути рядком');
        this._format = value;
    }

    // Перевизначаємо метод printInfo для EBook
    printInfo() {
        console.log(`Книга: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат: ${this.format}`);
    }

    // Статичний метод для створення EBook на основі класу Book
    static createFromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}

module.exports = EBook;
