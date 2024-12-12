// Функция принимает 2 массива.
//     Возвращает новый массив, который состоит только из тех элементов,
//     которые встретились в одном массиве, но не встретились в другом
//
// console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
// console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']


function arrayDiff<T>(arr1: T[], arr2: T[]): T[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const res1 = arr1.filter(x => !set2.has(x));
    const res2 = arr2.filter(x => !set1.has(x));

    return [...res1, ...res2];
}

console.log(arrayDiff<number | string>([1, 3, 3, 4], [1, 3, '4']));