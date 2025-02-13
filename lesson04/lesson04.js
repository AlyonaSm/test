// let x = 5

// if (x>10) {
//     console.log('Условие верно'); 
// } else {
//     console.log('Условие неверно');
// }

// let a = 5;
// let b = '10'
// let res = a + +b

// console.log(a.toString());
// //alert('Привет')


// let age = +prompt('Укажите Ваш возраст')
// let a = 10
// let res = age + a


// console.log(res);

let titleProject = prompt('Название проекта?')
let screensValue = 'Какие типы экранов нужны - шаблонные, с уникальным дизайном, с анимациями?'
let responsive = !!prompt('Нужен ли респонсивный сайт?')
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
const screenPrice = 12
const percentage = 10

let fullPrice = screenPrice + servicePrice1 + servicePrice2

servicePercentPrice = Math.round(fullPrice*(1-percentage/100))
console.log(servicePercentPrice);

if (fullPrice > 50000) {
    console.log('Для вас скидка 10%');
} else if (fullPrice >= 20000 && fullPrice<=50000) {
    console.log('Для вас скидка 5%');
} else if (fullPrice>=0 && fullPrice<20000) {
    console.log('Для вас скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так')
}