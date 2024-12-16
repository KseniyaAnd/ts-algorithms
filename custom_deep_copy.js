function deepCopy  (inObject) {
    let outObject, value, key

    if (typeof inObject !== "object" || inObject === null) {
        return inObject
    }

    outObject = Array.isArray(inObject) ? [] : {}

    for (key in inObject) {
        outObject[key] = deepCopy(inObject[key])
    }

    return outObject
}

const original = {
    name: "Alice",
    age: 30,
    skills: ["JavaScript", "React"],
    address: {
        city: "Wonderland",
        zip: 12345
    },
};

const copied = deepCopy(original);

copied.name = "Bob";
copied.skills.push("Node.js");
copied.address.city = "Dreamland";

console.log(original);
// { name: 'Alice', age: 30, skills: [ 'JavaScript', 'React' ], address: { city: 'Wonderland', zip: 12345 } }

console.log(copied);
// { name: 'Bob', age: 30, skills: [ 'JavaScript', 'React', 'Node.js' ], address: { city: 'Dreamland', zip: 12345 } }
