// Функция принимает массив meetups,
//     и возвращает суммарное количество человек, находящихся на активных митапах
//
// membersOnActiveMeetups(meetups); // 1500
//
// Пример:
//     const meetups = [
//         { name: 'JavaScript', isActive: true, members: 100 },
//         { name: 'Angular', isActive: true, members: 900 },
//         { name: 'Node', isActive: false, members: 600 },
//         { name: 'React', isActive: true, members: 500 },
//     ];
// membersOnActiveMeetups(meetups); // 1500

interface Meetup {
    name: string;
    isActive: boolean;
    members: number;
}

const meetups: Meetup[] = [
    {name: 'JavaScript', isActive: true, members: 100},
    {name: 'Angular', isActive: true, members: 900},
    {name: 'Node', isActive: false, members: 600},
    {name: 'React', isActive: true, members: 500},
];

function membersOnActiveMeetups(meetups: Meetup[]): number {
    // let res = 0;
    // meetups.forEach(el => {
    //     if (el.isActive) res += el.members;
    // })
    // return res;

    return meetups.reduce((sum, el) => {
        if (el.isActive) {
            sum += el.members
        }
        return sum;
    }, 0)

}

console.log(membersOnActiveMeetups(meetups))
//
// const res = [1, 2, 3, 4];
//
// const mulForEach = (res) => {
//     let newRes = [];
//     res.forEach((el, i) => {
//         newRes[i] = el * 7
//     })
//     return newRes;
// }
// const mulMap = (res) => {
//     return res.map((el) =>
//         el * 7
//     )
// }
//
//
// console.log(mulForEach(res));
// console.log(mulMap(res));