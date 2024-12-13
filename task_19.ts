// Написать функцию persistence, которая принимает положительный параметр num и возвращает число, которое нужно умножить цифры в num, пока не дойдете до единственной цифры.
//
//     Примеры:
// persistence(39) === 3 	// because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit
//
// persistence(999) === 4 	// because 9*9*9 = 729, 7*2*9 = 126,
// // 1*2*6 = 12, and finally 1*2 = 2
//
// persistence(4) === 0 		// because 4 is already a one-digit number
//

function persistence(num: number): number {
    if (num.toString().length === 1) return 0;
    let res = num.toString().split('').reduce((acc, el) => acc * Number(el), 1)
    return 1 + persistence(res);
}

console.log(persistence(4));