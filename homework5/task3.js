// Завдання 3 : Генерація таблиці множення
const number = 7;

//  for
console.log("Цикл for:");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// while
console.log("\nЦикл while:");
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
