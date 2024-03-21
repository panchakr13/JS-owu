// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

function submitForm(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;

    let output = document.getElementById('output');
    output.innerHTML = `
    <h4>Name: ${name}<h4>
    <h4>Surname: ${surname}<h4>
    <h4>Age: ${age}<h4>`
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let blockNumber = document.getElementById('blockNumber');
let storNumber = localStorage.getItem('storNumber')

if (storNumber){
    blockNumber.innerText = +storNumber + 1;
} else {
    localStorage.setItem('storNumber', 1);
    blockNumber.innerText = 1;
}

localStorage.setItem('storNumber', +blockNumber.innerText)
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push({id: i+1, name: `kokos${i+1}`})
}

let currentIndex = 0;

function displayObj(){
    let box = document.getElementById('box');
    box.innerHTML = '';

    for (let i = currentIndex; i < Math.min(currentIndex + 10, arr.length); i++){
        let div = document.createElement('div');
        div.innerText = 'ID: ' + arr[i].id;
        div.innerText += ' Name: ' + arr[i].name
        box.appendChild(div);
    }
}


document.getElementById('nextButt').addEventListener('click', function (){
    if (currentIndex + 10 < arr.length){
        currentIndex += 10;
        displayObj();
    }

})

document.getElementById('prevButt').addEventListener('click', function (){
    if (currentIndex - 10 >= 0){
        currentIndex -= 10;
        displayObj();
    }
});

displayObj()


//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

document.getElementById('hideText').addEventListener('click', function (){
    let text = document.getElementById('text');
    text.innerHTML = null;
})

document.getElementById('showText').addEventListener('click', function () {
    let text = document.getElementById('text')
    text.innerHTML ='<div>Some Text</div>';
})
// //
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputAge = document.getElementById('inputAge')
let checkAge = document.getElementById('checkAge')
let resultMsg = document.getElementById('resultMsg')

checkAge.addEventListener('click', function (){
    const age = parseInt(inputAge.value)

    if (age >= 18){
        resultMsg.innerText = 'Доступ дозволено! Вік дозволяє користуватися сервісом.'
    }else {
        resultMsg.innerText = 'Доступ заборонено! Ваш вік менше 18 років.'
    }
})



// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

document.addEventListener('DOMContentLoaded', function() {
    let generateTableButton = document.getElementById('generateTableButton');

    generateTableButton.addEventListener('click', function() {
        let rowCount = parseInt(document.getElementById('rowCountInput').value);
        let columnCount = parseInt(document.getElementById('columnCountInput').value);
        let cellContent = document.getElementById('cellContentInput').value;

        let tableContainer = document.getElementById('tableContainer');
        tableContainer.innerHTML = '';

        let table = document.createElement('table');

        for (let i = 0; i < rowCount; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < columnCount; j++) {
                const cell = document.createElement('td');
                cell.textContent = cellContent;
                row.appendChild(cell);
            }

            table.appendChild(row);
        }

        tableContainer.appendChild(table);
    });
});
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


document.addEventListener('DOMContentLoaded', function() {
    let lastReloadTime = localStorage.getItem('lastReloadTime');
    let currentTime = Date.now();

    if (!lastReloadTime || (currentTime - lastReloadTime >= 1000)) {
        let priceBlock = document.getElementById('priceBlock');
        let currentPrice = parseInt(priceBlock.innerText);
        let newPrice = currentPrice + 10;
        priceBlock.innerText = newPrice + ' UAH';
        localStorage.setItem('lastReloadTime', currentTime);
    }
});