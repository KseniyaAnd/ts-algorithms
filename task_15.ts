// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n: number): number {

    //арефметическая прогрессия
    //return n * (n + 1) / 2;

    return n<=1 ? n : sumTo(n)
}

console.log(sumTo(5));