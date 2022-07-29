let array = [
    [1, [2]],
    [3], 4, [5],
    [
        [6],
        [7]
    ],
    [8],
    [
        [9]
    ],
    [10]
];

const sumInArray = (arr) => {
    const result = arr.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
    return result  ;
}

console.log(sumInArray(array));