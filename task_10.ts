// Каррирование
// add(4)(3)(1) => 8
// */
//
// // const add = (x:number) => (y:number) => (z:number) => x+y+z;
// // console.log(add(4)(3)(1))
//

const add = function (x) {
    return  function (y) {
        return function (z) {
            return x+y+z;
        }
    }
}

// const add = (x:number) => (y:number) => (z:number) => x+y+z;
console.log(add(4)(3)(1))
