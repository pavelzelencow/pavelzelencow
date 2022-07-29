const age = confirm('Вам есть 18?');

// function checkAge(age) {
//     if (age === true) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }

const checkAge = (age) => age ? true : (confirm('А родители разрешили?'));

checkAge(age);