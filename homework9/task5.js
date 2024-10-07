const users = [
    { name: "Вика", email: "vika777@example.com", age: 21 },
    { name: "Ростик", email: "mrosss@example.com", age: 26 },
    { name: "Лиля", email: "lila@example.com", age: 20 }
];

for (const user of users) {
    // Деструктуризація об'єкта user
    const { name, email, age } = user;
    
    console.log(`Ім'я: ${name}, Електронна пошта: ${email}, Вік: ${age}`);
}
