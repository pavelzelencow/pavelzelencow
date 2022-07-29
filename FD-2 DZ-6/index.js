const array = [
    { score: 10 },
    { score: 1 },
    { score: 6570 },
    { score: 10005 },
    { score: 1765 },
    { score: 16363 },
    { score: 13463 },
    { score: 17474567457 },
    { score: 10654654 },
    { score: 167445740 },
    { score: 6760 },
]

const getSort = (arr) => {
    const result = arr.sort((item1, item2) => {
        return item2.score - item1.score;
    })
    return result
}

// or

console.log(getSort(array));

const array1 = [5, 2, 1, -10, 8];

const getHighToLow = (arr) => {
    const result = arr.sort((a, b) => {
        return b - a;
    })
    return result;
}

console.log(getHighToLow(array1));