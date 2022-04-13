// С ниже приведенным массивом решить следующие задачи.
// Все функции и данные должны быть протипизированы:

// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую

interface Iusers {
name: string;
phone: string;
email: string;
animals?: string[];
cars?: string[];
hasChildren: boolean;
hasEducation: boolean;
};

const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// 1. Создать строку из имен пользователей через запятую
function getName(users: Iusers[]): string {
    let nameLocal: string = ''
    users.forEach(el  => {
         if(el.name) {
             nameLocal += el.name +', ' 
         }
    })
    return nameLocal
}
console.log('Count-1' , getName(users));

// 2. Посчитать общее количнство машин у пользователей

function getCars(users: Iusers[]): number {
    let carsLocal: number = 0 
    users.forEach(el =>{

        if(el.cars != undefined) {
            carsLocal += el.cars.length;
        }
    })
    return carsLocal
}
console.log('Count-2', getCars(users));

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования

function getEducation(users: Iusers[]) {
    const result = users.filter(users => users.hasEducation === true);
    return result
}
console.log('Count-3', getEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных

function getAnimals(users: Iusers[]) {
    const result = users.filter(users => users.animals != undefined);
    return result
}
console.log('Count-4', getAnimals(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую

function getManCars(users: Iusers[]): string {
    let nameLocal: string = ''
    users.forEach(el => {
        if(el.cars != undefined) {
            nameLocal += el.name + ' have a ' + el.cars + ', '
        }
    })
    return nameLocal
}

console.log('Count-5', getManCars(users));
