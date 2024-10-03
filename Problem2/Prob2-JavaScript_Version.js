let num1 = 0, num2 = 1;

let limit = 4000000;

console.log("Fibonacci Series: ");
console.log(num1);
console.log(num2);

let sum = 0;

while (true) {
    let num3 = num1 + num2;

    if (num3 > limit) {
        break;
    }

    if (num3 % 2 == 0) {
        console.log(num3);
        sum += num3;
    }

    num1 = num2;
    num2 = num3;
}

console.log("Total Sum of Even Values = " + sum);
