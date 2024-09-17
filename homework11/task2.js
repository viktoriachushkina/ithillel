// Функція для отримання об'єкта todo
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Функція для отримання об'єкта user
function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Використання Promise.all
Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const [todo, user] = results;
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error with Promise.all:', error);
    });

// Використання Promise.race
Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Promise.race result:', result);
    })
    .catch(error => {
        console.error('Error with Promise.race:', error);
    });
