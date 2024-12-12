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

const meetups = [
    {name: 'JavaScript', isActive: true, members: 100},
    {name: 'Angular', isActive: true, members: 900},
    {name: 'Node', isActive: false, members: 600},
    {name: 'React', isActive: true, members: 500},
];

function membersOnActiveMeetups(meetups: { name: string, isActive: boolean, members: number }[]): number {
    let res = 0;
    meetups.forEach(el => {
        if (el.isActive) res += el.members;
    })
    return res;
}

console.log(membersOnActiveMeetups(meetups))

