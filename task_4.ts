//Функция принимает 2 массива, и возвращает массив объединенных значений,
//без дублирования

function union(arr1: number[], arr2: number[]): number[] {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log(union([5, 1, 2, 3, 3], [4, 3, 2]));