// об'єкт car1
const car1 = {
    brand: "Tesla",
    model: "S",
    year: 2021
};

// об'єкт car2
const car2 = {
    brand: "Audi",
    model: "A5",
    owner: "Ross Onyshko"
};

// об'єкт car3, оператор spread
const car3 = {
    ...car1,
    ...car2
};

console.log(car3);
