// Реализовать функцию indexOfAll.
//     Первый аргумент - массив, второй - значение
//
// Функция возвращает массив со всеми индексами, которые соответствуют переданному значению
//
// console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
// console.log(indexOfAll([1, 2, 3], 4)); -> []

function indexOfAll<T>(arr: T[], val: T): T[] {

    // let res = [];
    // arr.forEach((el, i) => {
    //     if (el == val) res.push(i)
    // })
    // return res;

    return arr.reduce((res: number[], el, i) => {
        if (el === val) {
            res = [...res, i];
        }
        return res;
    }, []) as [];
}

// console.log(indexOfAll<number | string>([1, 2, 3, 1, 2, 3], 1));

// console.log(NaN==1)
// console.log('1'===1)

// const a = 2;
// console.log(a.);


// const arr = [1,2,3,4];
//
// const res = arr.reduce((sum, curr, i, arr) => {
//     console.log('index: ', i);
//     console.log('sum: ', sum);
//     console.log('curr: ', curr);
//     console.log('----------------------')
//     return sum+=curr
// }, 0);
//
// console.log(res)