function any(arr, callback) {
    if (callback) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var value = arr_1[_i];
            if (callback(value)) {
                return true;
            }
        }
    }
    else {
        for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
            var value = arr_2[_a];
            if (value) {
                return true;
            }
        }
    }
    return false;
}
console.log(any([0, 1, 2, 0], function (x) { return x >= 2; }));
