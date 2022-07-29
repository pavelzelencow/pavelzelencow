const obj = {
    age: 27,
    name: 'Pasha',
    fruit: 'banana'
};

const keys = Object.keys(obj);

const without = (obj, keys) => {
    let newObj = {};

    for (key in obj) {
        if (keys.includes(key)) {
            newObj[key] !== obj[key];
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(without(obj, 'fruit'));