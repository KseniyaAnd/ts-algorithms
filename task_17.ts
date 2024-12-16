// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list<T>(arr: T[]): T[] {
    return arr.filter(el =>  !isNaN(Number(el)))
}

console.log(filter_list<number | string>(['1', 2,'a','b']));