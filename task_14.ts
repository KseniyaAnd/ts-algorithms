// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//
//     Например:
//
// let strings = [‘aaa', ‘aaa', ‘zzz', ‘xxx', ‘aaa', ‘bbb', ‘aaa',  ‘xxx', ‘ccc'];
//
// alert( unique(strings) ); // [‘aaa', ‘zzz', ‘xxx', ‘bbb', ‘ccc']

function unique<T> (arr: T[]): T[] {
    return Array.from(new Set(arr));
}
let strings = ['aaa', 'aaa', 'zzz', 'xxx', 'aaa', 'bbb', 'aaa',  'xxx', 'ccc'];
console.log(unique(strings))