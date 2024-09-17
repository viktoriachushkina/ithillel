// Функція для ділення з валідацією
function divide(numerator, denominator) {
    // Перевірка, чи є обидва аргументи числами
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }

    // Перевірка, чи denominator не дорівнює 0
    if (denominator === 0) {
        throw new Error('Denominator cannot be 0.');
    }

    // Повертаємо результат ділення
    return numerator / denominator;
}

try {
    console.log(divide(10, 2));  // Очікуваний результат: 5
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(10, 0));  // Очікуваний результат: Error: Denominator cannot be 0.
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(10, 'a'));  // Очікуваний результат: Error: Both arguments must be numbers.
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide('b', 2));  // Очікуваний результат: Error: Both arguments must be numbers.
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}
