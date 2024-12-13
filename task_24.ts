// Дан массив чисел. Необходимо отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
//
//     Примеры:
// [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//


function sortOdds(arr: number[]): number[] {
    const sortedOds = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return arr.map(num => (num % 2 == 0 ? sortedOds.shift()! : num));
}

console.log(sortOdds([7, 1]));
