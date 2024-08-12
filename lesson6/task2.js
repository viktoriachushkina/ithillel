// Функція для перевірки віку
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const age1 = 25;
const age2 = 15;

console.log(`Чи є особа з віком ${age1} дорослою?`, isAdult(age1)); 
console.log(`Чи є особа з віком ${age2} дорослою?`, isAdult(age2)); 
