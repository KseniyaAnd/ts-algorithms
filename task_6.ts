// Реализовать функцию indexOfAll.
//     Первый аргумент - массив, второй - значение
//
// Функция возвращает массив со всеми индексами, которые соответствуют переданному значению
//
// console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
// console.log(indexOfAll([1, 2, 3], 4)); -> []

function indexOfAll<T>(arr: T[], val: T): T[] {
    let res = [];
    arr.forEach((el, i) => {
        if (el == val) res.push(i)
    })
    return res;
}

console.log(indexOfAll<number | string>([1, 2, 3, 1, 2, 3], 1));