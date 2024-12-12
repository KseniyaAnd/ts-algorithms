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

    [Symbol.toPrimitive](hint) {
        return hint == "string" ? this.name : this.id;
    }

    // toString() {
    //     console.log('tostring')
    //     return this.name
    // },
    //
    // valueOf() {
    //     console.log('valueof')
    //     return 0;
    // }

    // [Symbol.toPrimitive]
};

console.log(`Name: ${obj}`); 		// Name: Obj-name
console.log(+obj);            		// 0
console.log(obj + 10);        		// 10


