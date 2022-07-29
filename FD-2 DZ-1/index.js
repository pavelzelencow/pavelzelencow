const currentYear = Number(prompt('Введите любой год от Рождества Христова!'));

if (((currentYear % 4 === 0) && (currentYear % 100 !== 0)) || (currentYear % 400 === 0)){
    alert('В этом году 366 дней!');
} else{
    alert('В этом году 365 дней!');
}