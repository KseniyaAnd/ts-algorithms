function any(arr: number[], callback?: (value:number) => boolean): boolean {
    if (callback) {
        for (let value of arr) {
            if (callback(value)) {
                return true
            }
        }
    } else {
        for (let value of arr) {
            if (value) {
                return true
            }
        }
    }

    return false
}

console.log(any([0, 1, 2, 0], x => x >= 2));