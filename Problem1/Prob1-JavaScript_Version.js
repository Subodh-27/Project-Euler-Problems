let count = 1000, sum = 0;

for (let i = 1; i < count; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}

console.log(sum);
