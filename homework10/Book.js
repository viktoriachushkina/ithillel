class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Геттеры и сеттеры для властивостей
    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string') throw new Error('Назва повинна бути рядком');
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string') throw new Error('Автор повинен бути рядком');
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number' || value <= 0) throw new Error('Рік видання повинен бути числом більше нуля');
        this._year = value;
    }

    // Метод для виведення інформації про книгу
    printInfo() {
        console.log(`Книга: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    // Статичний метод для пошуку найдавнішої книги
    static findOldestBook(books) {
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}

module.exports = Book;
