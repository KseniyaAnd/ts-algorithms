//Реализовать функцию forEachRight
//Первый аргумент - массив, второй - функция, применяется на массив в обратном порядке

function forEachRight<T, R = void>(arr: T[], callback: (value: T) => R): R[] | void {
    return arr.reverse().map(callback);
}

//forEachRight([1, 2, 3, 4], val => console.log(val));

// console.log(forEachRight<number | string>([1, 2, 3, 4], (x) => x * 2));