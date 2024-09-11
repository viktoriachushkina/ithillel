const numbers = [11, 22, 33, 44, 55];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Сума всіх елементів масиву: ${sum}`);
