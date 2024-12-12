// const factory = (xValue, yValue, funcSumName) => {
// ...
// }
// const obj = factory(12, 23, 'myFunc');
//
// console.log(obj.x, obj.y, obj.myFunc()); // 12, 23, 35
//

const factory = (x: number, y: number, funcSumName: string) => {
    return {
        x,
        y,
        [funcSumName]: function () {
            return this.x + this.y;
        }
    }
}
const obj = factory(12, 23, 'myhFunc');

console.log(obj.x, obj.y, obj.myhFunc()); // 12, 23, 35

