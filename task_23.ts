// Вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.
//
//     Примеры:
// getMiddle("test") 	// should return "es"
// getMiddle("testing") 	// should return "t"
// getMiddle("middle") 	// should return "dd"
// getMiddle("A") 	// should return "A"


function getMiddle(str: string): string {
    const len = str.length;
    const middle = Math.floor(len / 2);

    if (len % 2 === 0) {
        return str.slice(middle - 1, middle + 1);
    }
    return str.slice(middle, middle + 1);
}

console.log(getMiddle("test"));    // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle"));  // "dd"
console.log(getMiddle("A"));       // "A"
