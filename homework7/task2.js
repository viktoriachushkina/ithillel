function recursiveCount(num) {
    console.log(num);
    
    if (num <= 0) {
        return;
    }

    recursiveCount(num - 1);
}

recursiveCount(8);
