Array.prototype.customMap = function (callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
       newArr.push(callback(this[i]));
    }

    return newArr;
}

let arr = [1, 2, 3];
arr = arr.customMap(e => e * 2);
onsole.log(arr);