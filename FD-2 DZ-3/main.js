const array = [1, 2, 0, -0, null, 3, 4, 5, false, NaN, 7, 8, undefined, "", 9, 10];

const sortArray = (array) => {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (Boolean(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return console.log(newArray);
}

sortArray(array);


//or


let array1 = [1, 2, 0, -0, null, 3, 4, 5, false, NaN, 7, 8, undefined, "", 9, 10];
console.log(array1.filter(Boolean));