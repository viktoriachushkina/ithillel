// Завдання 1: Визначення рівня успішності студента

const averageGrade = 87; 

if (averageGrade < 60) {
    console.log("Незадовільно");
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log("Задовільно");
} else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log("Добре");
} else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log("Дуже добре");
} else if (averageGrade >= 91 && averageGrade <= 100) {
    console.log("Відмінно");
} else {
    console.log("Неправильна оцінка");
}
