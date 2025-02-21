// for(let i = 0; i <= 5; i++) {
//     console.log(i)
// }

// let num = 0

// for(let i = 10; i > num; i--) {
//     console.log(i);
    
// }
//const screenPrice = 10000
const percentage = 10
let allServicePrices;
let fullPrice;
let newTitle;
let servicePercentPrice;
let titleProject
let screensValue
let responsive
let service1
let servicePrice1
let service2
let servicePrice2







const asking = function() {
    titleProject = prompt('Название проекта?')
    screensValue = prompt('Какие типы экранов нужны - шаблонные, с уникальным дизайном, с анимациями?')
    responsive = prompt('Нужен ли респонсивный сайт?')
    service1 = prompt('Какой сервис нужен?')
    servicePrice1 = +prompt('Сколько это будет стоить?')
    service2 = prompt('Какой еще сервис нужен?')
    servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
}








// const getAllServicePrices = function() { 
//     return servicePrice1 + servicePrice2 
// } 

function getFullPrice() {
    return allServicePrices + screenPrice;
}


const getServicePercentPrices = function() {
    return  fullPrice*(1-percentage/100);
}


const getTitle = function() {
    return titleProject[0].toUpperCase() + titleProject.substring(1).toLowerCase();
}







//Предоставление скидки
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









// asking()
// allServicePrices = getAllServicePrices()
// fullPrice = getFullPrice();
// servicePercentPrice = getServicePercentPrices();
//getRollbackMessage();

// newTitle = getTitle();




// console.log(Math.ceil(servicePercentPrice));
// console.log(titleProject);
// console.log(screensValue);
// console.log(responsive);
// console.log(service1);
// console.log(servicePrice1);
// console.log(service2);
// console.log(servicePrice2);





// Задание 1
const checkIsNumber = function(number) {
    if (isFinite(number)) {
        return number;
    } else if (!isNaN(parseFloat(number))) {
        return parseFloat(number)
    } else {
        console.log('Число не введено')
    }
} 



// Задание 2
let screenPrice = prompt('Сколько будет стоить 1 экран?')


while (!isFinite(checkIsNumber(screenPrice)) || screenPrice !== screenPrice.trim() || 
screenPrice === null || screenPrice === "") {
    screenPrice = prompt('Сколько будет стоить 1 экран?');
}  

console.log('1 экран будет стоить ', parseFloat(screenPrice));




// Задание 3
let num = 0;

const getAllServicePrices = function() {
    for (questions = 0; questions < 2; questions++) {
        let textFromPrompt = prompt('Сколько будет стоить этот сервис?')
        while (!isFinite(checkIsNumber(textFromPrompt)) || textFromPrompt !== textFromPrompt.trim() || 
                textFromPrompt === null || textFromPrompt === "") {
                textFromPrompt = prompt('Сколько будет стоить 1 экран?');
}  
        num += +parseFloat(textFromPrompt)
    }
}

getAllServicePrices()
console.log('Общая стоимость двух сервисов ', num)