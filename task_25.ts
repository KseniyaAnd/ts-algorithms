// Написать функцию, которая будет возвращать количество отдельных нечувствительных к регистру буквенных символов и числовых цифр,
//     которые встречаются во входной строке более одного раза. Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) и цифры.
//
//     Примеры
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function countDuplicateCharacters(str: string): number {
    const lowerStr = str.toLowerCase();

    const charCount = {};

    for (let char of lowerStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let count = 0;
    for (let key in charCount) {
        if (charCount[key] > 1) {
            count++;
        }
    }

    return count;
}

console.log(countDuplicateCharacters("abcde"));
console.log(countDuplicateCharacters("aabbcde"));