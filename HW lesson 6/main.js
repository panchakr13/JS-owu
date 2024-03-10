// - Знайти та вивести довижину настипних стрінгових значень
console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());
// - Є "брудна" стрінга. Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.substring(1, str.length - 3));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
    let stringToarray = (str) => str.split(' ');
console.log(stringToarray(str1));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
console.log(arr1.map((num) => num.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNums(nums, direction){
    if (direction === 'ascending'){
        nums.sort((a, b) => a - b);
    }else if (direction === 'descending') {
        nums.sort((a, b) => b - a);
    }
    return nums;
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let a1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(a1);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let a2 = coursesAndDurationArray.filter((k) => k.monthDuration > 5);
console.log(a2);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let a3 = coursesAndDurationArray.map((element,index) => ({id : index + 1, title: element.title, monthDuration: element.monthDuration}));
console.log(a3);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let values = [6,7,8,9,10, 'ace', 'jack', 'queen', 'king'];
let color = ['red', 'black'];
let desk = () => {
    let desks = [];
    for (const cardSuit of cardSuits) {
        for (const value of values) {
            desks.push({cardSuit: cardSuit, value: value})
        }
    }
    desks.map(item => item.cardSuit === 'diamond' || item.cardSuit === 'heart' ? item.color = color[0] : item.color = color[1]);
    return desks;
}
console.log(desk());

let fullDesk = desk();

// - знайти піковий туз
let spadeAce = fullDesk.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Spade Ace: ', spadeAce);

// - всі шістки
let sixes = fullDesk.filter(card => card.value === 6);
console.log('Шістки: ', sixes);

// - всі червоні карти
let redCards = fullDesk.filter(card => card.color === 'red');
console.log('Червоні карти: ', redCards)

// - всі буби
let diamonds = fullDesk.filter(card => card.cardSuit === 'diamond');
console.log('Буби: ', diamonds)

// - всі трефи від 9 та більше
let clubsHigher = fullDesk.filter(card => card.cardSuit === 'clubs' && (card.value > 9 || typeof card.value != 'number'));
console.log('Трефи від 9: ', clubsHigher)

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let reduce = fullDesk.reduce(
    (accumulator, card) => {
        if (card.cardSuit === 'spade') {
            accumulator[0].push(card);
        }else if (card.cardSuit === 'diamond'){
            accumulator[1].push(card);
        }else if (card.cardSuit === 'heart'){
            accumulator[2].push(card)
        }else {
            accumulator[3].push(card)
        }
        return accumulator;
    },
    [[],[],[],[]]
)
let spadesC = reduce[0];
let diamondsC = reduce[1];
let heartsC = reduce[2];
let clubsC = reduce[3];
console.log('spades:', spadesC, '     diamonds:', diamondsC, '     hearts:', heartsC, '     clubs:', clubsC)
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter(module => module.modules.includes('sass'))
console.log("Об'єкт в якому є модуль sass: ", sass)

// --написати пошук всіх об'єктів, в який в modules є docker
let dockerModule = coursesArray.filter(module => module.modules.includes('docker'))
console.log("Об'єкти в яких є модуль docker: ", dockerModule)