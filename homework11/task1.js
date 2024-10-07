function printWithDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

printWithDelay("Привіт, це повідомлення з затримкою!", 2000);
