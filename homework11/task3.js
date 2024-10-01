// Функція для отримання об'єкта todo з використанням async/await
async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Функція для отримання об'єкта user з використанням async/await
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function executeRequests() {
    try {
        // Використання Promise.all
        const results = await Promise.all([fetchTodo(), fetchUser()]);
        const [todo, user] = results;
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
        
        // Використання Promise.race
        const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Promise.race result:', firstResult);
    } catch (error) {
        console.error('Error with executing promises:', error);
    }
}

executeRequests();
console.log("Начинаем готовить");

setTimeout(() => {
  console.log("Вода закипела");
}, 3000); // Через 3 секунды

console.log("Режем овощи");
