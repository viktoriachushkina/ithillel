const Book = require('./Book');
const EBook = require('./EBook');

// Створюємо кілька об'єктів класу Book
const book1 = new Book("Мистецтво війни", "Сунь-Цзи", 500);
const book2 = new Book("1984", "Джордж Оруелл", 1949);

// Викликаємо метод printInfo для кожної книги
book1.printInfo();
book2.printInfo();

// Створюємо об'єкт класу EBook
const ebook1 = new EBook("Цифрова фортеця", "Ден Браун", 1998, "PDF");

// Викликаємо метод printInfo для електронної книги
ebook1.printInfo();

// Масив книг для пошуку найдавнішої
const books = [book1, book2, ebook1];

// Викликаємо статичний метод для пошуку найдавнішої книги
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

// Використання статичного методу для створення електронної книги на основі класу Book
const ebookFromBook = EBook.createFromBook(book2, "EPUB");
ebookFromBook.printInfo();
