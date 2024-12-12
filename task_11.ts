// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//     Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
//     Функция getMaxSubSum(arr) должна возвращать эту сумму.
//
//     Например:
//
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»


function getMaxSubSum(arr: number[], h: number): number {
    let winSum = Number.MIN_VALUE;

    for (let i = 0; i < h; i++) {
        winSum += arr[i];
        console.log('winSum: ', winSum)
    }

    let maxSum = winSum

    for (let i = h; i < arr.length; i++) {
        console.log('arr[i]', arr[i])
        winSum += arr[i] - arr[i - h];
        maxSum =  Math.max(maxSum, winSum);
    }

    return maxSum;


    // let maxSum = 0;
    // let currentSum = 0;
    //
    // for (let num of arr) {
    //     currentSum += num
    //     if (currentSum > maxSum) maxSum = currentSum;
    //     if (currentSum < 0) currentSum = 0;
    // }
    //
    // return maxSum

    // Кадана
    // let currentSum = 0;  // Текущая сумма
    // let maxSum = 0;      // Максимальная сумма (включая 0 для случая с отрицательными числами)
    //
    // for (let num of arr) {
    //     currentSum = Math.max(num, currentSum + num);  // Решаем, начать новый подмассив или продолжить текущий
    //     maxSum = Math.max(maxSum, currentSum);          // Обновляем максимальную сумму
    // }
    //
    // return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9], 2));

