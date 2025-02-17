// 'use strict'
// let name = 'Alyona'

// const foo2 = function() {
//     let age = 27 //Локальная переменная
//     console.log('Hello world', name);
//     console.log('Мне', age);
    
    
// }
// foo2()

let titleProject = prompt('Название проекта?')
let screensValue = 'Какие типы экранов нужны - шаблонные, с уникальным дизайном, с анимациями?'
let responsive = !!prompt('Нужен ли респонсивный сайт?')
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
const screenPrice = 10000
const percentage = 10

const getAllServicePrices = function() {
    let allServicePrices = servicePrice1 + servicePrice2   
    return allServicePrices;
}
console.log('Стоимость всех услуг ', getAllServicePrices());
 
let allServicePrices = getAllServicePrices()

function getFullPrice() {
    let fullPrice = allServicePrices + screenPrice;
    return fullPrice;
}
console.log('Стоимость всего проекта ', getFullPrice());

let fullPrice = getFullPrice();


const getTitle = function() {
    let newTitle = titleProject[0].toUpperCase() + titleProject.substring(1).toLowerCase()
    return newTitle;
}
console.log('Название проекта', getTitle());

const getServicePercentPrices = function() {
    let servicePercentPrice = fullPrice*(1-percentage/100);
    return servicePercentPrice;
}
let servicePercentPrice = getServicePercentPrices()
console.log('Стоимость проекта с учетом скидки подрядчику ', servicePercentPrice);

const getRollbackMessage = function() {
    if (fullPrice > 50000) {
        console.log('Скидка клиенту 10%');
    } else if (fullPrice >= 20000 && fullPrice<=50000) {
        console.log('Скидка клиенту 5%');
    } else if (fullPrice>=0 && fullPrice<20000) {
        console.log('Скидка клиенту не предусмотрена');
    } else {
        console.log('Что-то пошло не так')
    }
}
getRollbackMessage();
