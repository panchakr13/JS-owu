// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(new User(i + 1, `Vasya ${i+1}`, 'Pupkin', `VasyaPupkin${i + 1}@gmail.com`,
        `+38098${Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('')}`))
}

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let UserEvenId = arr.filter((id) => id.id % 2 === 0);
console.log("Об'єкти з парними ID: ", UserEvenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let SortId = arr.sort((a, b) => a.id - b.id);
console.log("Відсортованні ID по зростанню: ", SortId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arr2 = [];

function RandomProducts() {
    let products = ['Product1', 'Product2', 'Product3', 'Product4', 'Product5', 'Product6', 'Product7'];
    let numberOfProducts = Math.floor(Math.random() * products.length) + 1;
    return products.slice(0, numberOfProducts);
}

for (let i = 0; i < 10; i++){
    arr2.push(new Client(i+1, `Joe ${i+1}`, 'Biden', 'email@gmail.com', '+380977777777', RandomProducts()))
}

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let SortOrder = arr2.sort((a, b) => a.order.length - b.order.length)

console.log("Відсортована кількість товарів в полі order по зростанню: ", SortOrder);

console.log('********************************')
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.increaseMaxSpeed = maxSpeed;
    this.driver = null;

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${this.increaseMaxSpeed} км/год`)
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function (){
        for (const key in this) {
            if (typeof this[key] === "function" || this[key] === this.increaseMaxSpeed) continue;
            console.log(key + ' :', this[key])
        }
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.newSpeed = function (Speed){
        this.increaseMaxSpeed = Speed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver){
        this.driver = driver;
    }
}

let car1 = new Car("Toyota", "Japan", 2009, 169, 1998)

let driver = { name: 'Petro Schur', age: 36, license: 'B' };
car1.addDriver(driver);
car1.newSpeed(110)
car1.drive()
car1.info()

console.log('********************************')

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.currentMaxSpeed = maxSpeed;
        this.driver = null;
    }
    drive(){
        console.log(`Їдемо зі швидкістю ${this.currentMaxSpeed} км/год`)
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info(){
        for (const key in this) {
            if (typeof this[key] === "function" || this[key] === this.currentMaxSpeed) continue;
            console.log(key + ' :', this[key])
        }
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    setMaxSpeed(newSpeed){
        this.currentMaxSpeed = newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue){
        this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver){
        this.driver = driver;
    }
}

let car2 = new Car2('Audi', 'Germany', 2017, 217, 2995);

car2.addDriver({name: 'Paul', age: 25, license: 'B'});
car2.setMaxSpeed(203);
car2.drive();
car2.info();

//

console.log('********************************')


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let CinderellaArr = [];
for (let i = 0; i < 10; i++){
    CinderellaArr.push(new Cinderella(`Cinderella ${i+1}`, 18+(i+1), 33+(i+1)))
}


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let herPrince = new Prince('Charling', 22, 35);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of CinderellaArr) {
    if (cinderella.footSize === herPrince.shoe){
        console.log(`${cinderella.name} повинна бути з принцом ${herPrince.name}, розмір ноги попелюшки: ${cinderella.footSize}, розмір туфельки, яку знайшов принц: ${herPrince.shoe}`)
    }

}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = CinderellaArr.find(cinderella => cinderella.footSize === herPrince.shoe);
console.log("Попелюшка знайдена за допомоги функції find: ", findCinderella)
