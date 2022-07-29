// 1
// let hello = 'Привет, ';
// let myName = prompt('Введите свое имя!');

// // alert(hello + myName + '.');
// alert(`Hello ${myName}`);
// if(myName) {
//     alert(`Hello ${myName}`)
// } else {
//     prompt('What you name?')
// }



// 2
// const age = confirm('You are 18?');

// if(age) {
//     alert('Ok!')
// } else {
//     alert('Goodbye!')
// }



//3
// const a = prompt('Enter first number!');
// const b = prompt('Enter second number!');


// alert(Number(a) + Number(b));



//4 

// const a = Number(prompt('Enter first number!'));
// const b = Number(prompt('Enter second number!'));
// const c = prompt('Enter arithmetic sign!');


// switch (c) {
//     case '/':
//         alert(a / b);
//         break;
//     case '*':
//         alert(a * b);
//         break;
//     case '-':
//         alert(a - b);
//         break;
//     case '+':
//         alert(a + b);
//         break;
//     default:
//         alert('You are stupid!!')
//         break;
// };

//тернарный оператор

// let trueValue = true;

// let answer = trueValue ? true : false;
// let answer = trueValue ? '1' : '0';

// or

// if(trueValue) {
//     return true;
//     or
//     return '1';
// } else {
//     return false
//     or 
//     return '0';
// }

// ЦИКЛЫ

// let age = 1;
// // while работает пока переменная true
// while (age < 30) {
//     alert(age);
//     age = age + 1;
//     // or ++age
// }

// let a = 1;

// do {
    
// } while (condition);

// вывести все четные число от 0 до 100

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let sum = 0;
// for(let i = 0; i <= 100; i++) {
//     sum = sum + i;
//     // sum += i;
//     alert(sum);
// }


// let num;

// do {
//     num = Number(prompt('Enter number biggir 100', 0));
// } while (num <= 100 && num);



// дз

// Нужно спросить у пользователя спросить год и мы должны вернуть количество дней в году



// lesson-2


// function sum(// аргкмент фунции) {
//     // описание
//     // return 1; //  возвращение функции
// }

// sum(); //использование

// function summ(number1, number2, number3) {
//     return number1 + number2;
// }

// const b = summ(23, 45, 0);


// const name = helloMessage('Masha');

// function helloMessage(name, hello) {
//     alert(name + ' hello world!');
// }

// helloMessage();


// function helloName(name = 'Vasia') {
//      arguments содержит все аргументы которые не используются в функции
//     const name = 'Ivan';
//     returm `Hello, ${name}`
// }
// helloName('Vovka');


// const helloName2 = (name) => {
//     return `Hello, ${name}`
// }

// alert(helloName2('Vova'));

// const getMinutes = (hour) => {
//     return(hour * 60);
// }
// console.log(getMinutes(1));
// console.log(getMinutes(87));
// console.log(getMinutes(5));
// console.log(getMinutes(50));
// console.log(getMinutes(32));


// // если фунция состоит из одной строки ее можно записать в одну строку  и не нужно писать  return
// const getHour = (minute) => minute / 60;

// console.log(getHour(560));
// `${hour} hour(s) are ${hour * 60} minutes`

// const getToMinutes = (hour) => {
//     if(typeof hour === 'number') {
//         return(`${hour} hour(s) are ${hour * 60} minutes`);
//     } else {
//         prompt('Enter number!')
//     }
// }

// console.log(getToMinutes(56));

// const typeOf = (type) => {
//     return typeof type;
// }
// // or

// // const typeOf = (type) => typeof type;

// console.log(typeOf(NaN));


const bigNumber = (a, b) => {
    if(a > b) {
        return b;
    } else if (a < b) {
        return a;
    } else {
        return `${a} равно ${b}`;
    }
}

console.log(bigNumber(2, 5));
console.log(bigNumber(56, 5));
console.log(bigNumber(1, 89));
console.log(bigNumber(3, 3));
console.log(bigNumber(78787, 5787));


// or

const minNumber = (a, b) => a < b ? a : b;

console.log(minNumber(45, 65));
console.log(minNumber(567, 655));
console.log(minNumber(450, 659));


// homework

checkAge(age)

// вернуть true если возраст больше 18 а если меньше спросить у пользователя разрешили ли родители