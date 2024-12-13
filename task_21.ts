// Дана строка. Вернуть длину самого короткого слова
// Пример:
//     getLengthOfShortestWord(‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.’) 	// => 2
//

function getLengthOfShortestWord(str: string): number {
    let newStr = str.split(' ').map(el => el.length);

    let minLen = Number.MAX_VALUE;

    for (const number of newStr) {
        if (number < minLen) minLen = number;
    }

    return minLen
}

console.log(getLengthOfShortestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'))