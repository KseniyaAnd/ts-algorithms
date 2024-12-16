Array.prototype.customFilter = function (callback) {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) arr.push(this[i])
    }

    return arr;
}

const a = [5, 21, 61, 8, 1];
const result = a.customFilter(i => i > 20);
console.log(result);