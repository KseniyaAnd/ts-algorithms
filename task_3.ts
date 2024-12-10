//Реализовать функцию forEachRight
//Первый аргумент - массив, второй - функция, применяется на массив в обратном порядке

function forEachRight(arr: number[], callback: (value: number) => void): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        callback(arr[i]);
    }
}

forEachRight([1, 2, 3, 4], val => console.log(val));