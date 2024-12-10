function arrayDiff (arr1: any[], arr2: any[]): number[] {

    let res = []

    res.push(arr1.filter(x => !arr2.includes(x)));
    res.push(arr2.filter(x => !arr1.includes(x)))

    return res;
}

console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4']));