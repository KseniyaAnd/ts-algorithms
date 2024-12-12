// const factory = (xValue, yValue, funcSumName) => {
// ...
// }
// const obj = factory(12, 23, 'myFunc');
//
// console.log(obj.x, obj.y, obj.myFunc()); // 12, 23, 35
//

const factory = (xValue: number, yValue: number, funcSumName: string) => {
    return {
        x: xValue,
        y: yValue,
        [funcSumName]: function () {
            return this.x + this.y;
        }
    }
}
const obj = factory(12, 28, 'myhFunc');

console.log(obj.x, obj.y, obj.myhFunc()); // 12, 23, 35
