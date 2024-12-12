// const obj = {
//     id: 0,
//     name: 'Obj-name',
//     // ...
// };
//
// console.log(`Name: ${obj}`); 		// Name: Obj-name
// console.log(+obj);            		// 0
// console.log(obj + 10);        		// 10

const obj = {
    id: 0,
    name: 'Obj-name',

    toString() {
        console.log('tostring')
        return this.name
    },

    valueOf() {
        console.log('valueof')
        return 0;
    }
};

console.log(`Name: ${obj}`); 		// Name: Obj-name
console.log(+obj);            		// 0
console.log(obj + 10);        		// 10
