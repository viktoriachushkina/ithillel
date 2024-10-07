// console.log("Начинаем готовить");

// setTimeout(() => {
//   console.log("Вода закипела");
// }, 3000); // Через 3 секунды

// console.log("Режем овощи");
// это про таумаут и интервал
// // setTimeout
// setTimeout(() => {
//     console.log("Прошло 5 секунд");
//   }, 5000);
  
//   // setInterval
//   let counter = 0;
//   const interval = setInterval(() => {
//     counter++;
//     console.log(`Прошла ${counter}-я секунда`);
    
//     if (counter === 5) {
//       clearInterval(interval); // Останавливаем интервал после 5 секунд
//     }
//   }, 1000);


//   это про EventLoop
//   console.log("Начинаем выполнение");

// setTimeout(() => {
//   console.log("Асинхронный код");
// }, 0);

// console.log("Основной поток");

// это колбекхелл
// setTimeout(() => {
//     console.log("Первая задача завершена");
  
//     setTimeout(() => {
//       console.log("Вторая задача завершена");
  
//       setTimeout(() => {
//         console.log("Третья задача завершена");
//       }, 1000);
//     }, 1000);
//   }, 1000);
//   это про промисссс
// const pizzaOrder = new Promise((resolve, reject) => {
//     let isPizzaReady = true;
  
//     if (isPizzaReady) {
//       resolve("Пицца готова");
//     } else {
//       reject("Пицца задерживается");
//     }
//   });
  
//   pizzaOrder
//     .then(message => {
//       console.log(message);
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   Это упортребление промисса Лютые вопросы к коду 
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error("Ошибка:", error);
//   });
// const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'Первый'));
// const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'Второй'));
// //  или может быть  промис race
// Promise.all([promise1, promise2])
//   .then(results => {
//     console.log(results); // ["Первый", "Второй"]
//   });
//  



//  это промис ану и элл allSettled
// const promise1 = Promise.reject("Ошибка");
// const promise2 = new Promise(resolve => setTimeout(resolve, 1000, "Второй"));

// Promise.any([promise1, promise2])
//   .then(result => {
//     console.log(result); // "Второй"
//   });

async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  
  getData();
  

