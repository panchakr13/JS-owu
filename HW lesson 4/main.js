// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfRectangle(a, b){
    // let square = a * b;
    // return square;
    return a * b;
}
console.log("Площа прямокутника = " + areaOfRectangle(7,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r){
    return 2*3.14*r;
}
console.log("Площа кола = " + areaOfCircle(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S(повна)=2πR2+2πRH
function areaOfCylinder(h, r){
    return (2 * 3.14 * r**2) + (2 * 3.14 * r * h);
}
console.log("Площа циліндра = " + areaOfCylinder(7, 4))

// - створити функцію яка приймає масив та виводить кожен його елемент
function eachArrElement(arr){
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
let arr = [
    {name: 'first_element', id: 0},
    {name: 'second_element', id: 1}
]
eachArrElement(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text){
    document.write("<p>" + text + "</p>");
}
let myText = "some_text"
paragraph(myText);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(text){
    document.write("<ul>");
    for (let i = 0; i < 3; i++)
        document.write("<li>" + text + "</li>");
    document.write("</ul>");
}
createUl('some_text_of_li')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl1(text, quantity){
    document.write("<ul>");
    for (let i = 0; i < quantity; i++)
        document.write("<li>" + text + "</li>");
    document.write("</ul>");
}
createUl1('another_text_of_li', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createList(array) {
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write("<li>" + array[i] + "</li>");
    }
    document.write("</ul>");
}
createList([37, "Hello", "Sergiy", true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr1 = [
    {id: 0, name: 'Sergiy', age: 37},
    {id: 1, name: 'Anatoliy', age: 36},
    {id: 2, name: 'Alex', age: 35}
];

function object(arr1){
    for (let i = 0; i < arr1.length; i++) {
        let obj = arr1[i];
        document.write("<div>" + "id: " + obj.id + "<br>" + "name: " +  obj.name + "<br>" + "age: " + obj.age + "<br>" + "<br>" + "</div>")
    }
}
object(arr1)

// - створити функцію яка повертає найменьше число з масиву
let array = [555,111,666,111,23532,12662];
function smallestNumber(arr){
    let smallestN = arr[0];
    for (let i of arr){
        if (i < smallestN){
            smallestN = i;
        }
    }
    return document.write("Найменше число з масиву - " + smallestN);
}

smallestNumber(array);

document.write("<br>")
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arrayOfNumbers = [100,100,100];
function sum(arr){
    let sum = 0;
    for (let i of arr){
        sum += i;
    }
    return document.write("Сумма елементів масиву = " + sum);
}

sum(arrayOfNumbers);

document.write("<br>")
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrN = [11,22,33,44]
function swap(arr, index1, index2){
    let k = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = k;

    return document.write(arr)

}
swap(arrN, 0,1)

document.write("<br>")

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency){
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}

document.write(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));



