function checkOrder(available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we dont have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty";
    } else {
        return "Your order is accepted";
    }
}

console.log(checkOrder(100, 20));  // Очікуваний результат: "Your order is accepted"
console.log(checkOrder(100, 120)); // Очікуваний результат: "Your order is too large, we don’t have enough goods."
console.log(checkOrder(100, 0));   // Очікуваний результат: "Your order is empty"
