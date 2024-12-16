// Задача по JavaScript: Нахождение родителя узла в дереве объекта
// У вас есть древовидный объект, представляющий структуру с родительскими и дочерними узлами. Напишите функцию, которая принимает дочерний узел и возвращает его родителя.
//
//     javascript
// Copy code
// // Пример древовидного объекта
// const tree = {
//     id: 1,
//     name: 'Root',
//     children: [
//         {
//             id: 2,
//             name: 'Node A',
//             children: [
//                 {
//                     id: 5,
//                     name: 'Node A-1',
//                     children: []
//                 },
//                 {
//                     id: 6,
//                     name: 'Node A-2',
//                     children: []
//                 }
//             ]
//         },
//         {
//             id: 3,
//             name: 'Node B',
//             children: [
//                 {
//                     id: 7,
//                     name: 'Node B-1',
//                     children: []
//                 }
//             ]
//         },
//         {
//             id: 4,
//             name: 'Node C',
//             children: []
//         }
//     ]
// };
//
// // Функция для нахождения родителя дочернего узла
// // functon findParent(childId, tree) {

const tree = {
    id: 1,
    name: 'Root',
    children: [
        {
            id: 2,
            name: 'Node A',
            children: [
                {
                    id: 5,
                    name: 'Node A-1',
                    children: []
                },
                {
                    id: 6,
                    name: 'Node A-2',
                    children: []
                }
            ]
        },
        {
            id: 3,
            name: 'Node B',
            children: [
                {
                    id: 7,
                    name: 'Node B-1',
                    children: []
                }
            ]
        },
        {
            id: 4,
            name: 'Node C',
            children: []
        }
    ]
};

function findParent(childId, tree) {
    if (tree.children.length > 0) {
        for (const child of tree.children) {
            if (child.id === childId) return tree;
        }

        for (const child of tree.children) {
            const res = findParent(childId, child);
            if (res) return res;
        }
    }

 return null;
}

const parent = findParent(6, tree);
console.log(parent);