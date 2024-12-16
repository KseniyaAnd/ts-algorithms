Array.prototype.customReduce = function (callback, initialValue) {
    const array = this;

    let accumulator = initialValue !== undefined ? initialValue: array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

const numbers = [1, 2, 3, 4];

const sum = numbers.customReduce((acc, num) => acc + num, 0);
console.log(sum); // 10

const max = numbers.customReduce((acc, num) => (num > acc ? num : acc));
console.log(max); // 4
