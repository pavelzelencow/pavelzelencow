const sentence = ['My', 'name', 'is', null];

const inputName = (value, name) => {
    let index = sentence.indexOf(value);
    if (sentence.includes(value)) {
        sentence.splice(index, 1, name)
    }
    return sentence.join(' ');
}
console.log(inputName(null, 'Pavel'));