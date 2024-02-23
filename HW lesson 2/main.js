// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1;
arr1 = ['item1', 'item2', 'item3', 1, 2, 3, true, true, true, false]
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])
console.log(arr1[8])
console.log(arr1[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books1 = {
    title: 'title1',
    pageCount: 100500,
    genre: 'genre1'
}

let books2 ={
    title: 'title2',
    pageCount: 50,
    genre: 'genre2'
}

let books3={
    title: 'title3',
    pageCount: 300,
    genre: 'genre3'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let books4 = {
    title: 'title4',
    pageCount: 400,
    genre: 'genre4',
    authors: {
        name: 'petya',
        age: 52
    }
}
let books5 = {
    title: 'title5',
    pageCount: 600,
    genre: 'genre5',
    authors: {
        name: 'vasiliy',
        age: 49
    }
}

let books6 = {
    title: 'title6',
    pageCount: 800,
    genre: 'genre6',
    authors: {
        name: 'dmitro',
        age: 15
    }
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {name: 'name1', username: 'username1', password: 111111111},
    {name: 'name2', username: 'username2', password: 222222222},
    {name: 'name3', username: 'username3', password: 333333333},
    {name: 'name4', username: 'username4', password: 444444444},
    {name: 'name5', username: 'username5', password: 555555555},
    {name: 'name6', username: 'username6', password: 666666666},
    {name: 'name7', username: 'username7', password: 777777777},
    {name: 'name8', username: 'username8', password: 888888888},
    {name: 'name9', username: 'username9', password: 999999999},
    {name: 'name10', username: 'username10', password: 'popa555'},
];

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0){
    console.log('Вірно', x)
}
else{
    console.log('Невірно', x)
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59;
if (time >= 0 && time <= 15){
    console.log('Перша четверть')
}
else if (time > 15 && time <= 30){
    console.log('Друга четверть')
}
else if (time > 30 && time <= 45){
    console.log('Третя четверть')
}
else if (time > 45 && time < 60){
    console.log('Четверта четверть')
}
else{
    console.log('Некорректно вказані данні!', time)
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1;
if (day > 0 && day <= 10){
    console.log('Перша декада')
}
else if (day > 10 && day <= 20){
    console.log('Друга декада')
}
else if (day > 20 && day <= 31){
    console.log('Третя декада')
}
else{
    console.log('Невірно вказані данні', day)
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = 7;
switch (week){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Вкажіть номер дня тижня цифрою від 1 до 7')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let fnumber = 500;
let snumber = 700;
if (fnumber > snumber){
    console.log(`${fnumber} > ${snumber}`)
}
else if(snumber > fnumber){
    console.log(`${snumber} > ${fnumber}`)
}

else{
    console.log(`${snumber} = ${fnumber}`)
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xf = 0 || 'default';
console.log(xf)  //не зовсім зрозумів це завдання

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
}

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}

if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}

if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}

if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}

if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
}