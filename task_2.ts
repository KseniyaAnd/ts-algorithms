// Функция принимает 2 массива.
//     Возвращает новый массив, который состоит только из тех элементов,
//     которые встретились в одном массиве, но не встретились в другом
//
// console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
// console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']


function arrayDiff<T>(arr1: T[], arr2: T[]): T[] {

    let res = []
//
    res.push(arr1.filter(x => !arr2.includes(x)));
    res.push(arr2.filter(x => !arr1.includes(x)))

    return res;
}

console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4']));