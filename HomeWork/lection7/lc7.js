// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// class User {
//
//
//     constructor(id,name, surname, email, phone) {
//         this.id = id
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// let users = []
// let user1 = new User(1,'Vasya','Palkin','Palkin@gmail',0988886723);
// let user2 = new User(2,'Katya','Vaks','Vaks@gmail',0976524783);
// let user3 = new User(3,'Mery','Stonks','stonks@gmail.com',0733536789);
// let user4 = new User(4,'Katya','Pavliv','pavliv@gmail',0976324781);
// let user5 = new User(5,'Max','Gay','Mgay@gmail',0934568783);
// let user6 = new User(6,'Anton','Bal','ABAL@gmail',0964541118);
// let user7 = new User(7,'Katya','Vaks','Vaks@gmail',09814617584);
// let user8 = new User(8,'Katya','Vaks','Vaks@gmail',06823192485);
// let user9 = new User(9,'Katya','Vaks','Vaks@gmail',0680075243);
// let user10 = new User(10,'Katya','Vaks','Vaks@gmail',098302148912);
// users = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let second = users.filter(value => value.id % 2 === 0)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = users.sort((a, b) => a.id - b.id)
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name,surname, email, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.order = order;
//     }
// }
// let clients = []
// let client1 = new Client(1,'Vasya','Palkin','Palkin@gmail',[]);
// let client2 = new Client(2,'Katya','Vaks','Vaks@gmail',['water','pumpkin pie','milk','cookies']);
// let client3 = new Client(3,'Mery','Stonks','stonks@gmail.com',['water','pumpkin pie']);
// let client4 = new Client(4,'Katya','Pavliv','pavliv@gmail',['bear','pumpkin pie','doritos']);
// let client5 = new Client(5,'Max','Gay','Mgay@gmail',['pumpkin pie']);
// let client6 = new Client(6,'Anton','Bal','ABAL@gmail',['water','cake']);
// let client7 = new Client(7,'Katya','Vaks','Vaks@gmail',['water','pumpkin pie','ice']);
// let client8 = new Client(8,'Katya','Vaks','Vaks@gmail',['water','pumpkin pie']);
// let client9 = new Client(9,'Katya','Vaks','Vaks@gmail',['water',]);
// let client10 = new Client(10,'Katya','Vaks','Vaks@gmail',['menu','water','pumpkin pie']);
// clients = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10]
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sorter = clients.sort((a, b) => a.order.length - b.order.length)
// console.log(sorter)

//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, yearOfManufacture, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info(){
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`)}
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     changeYear (newValue){
//         this.yearOfManufacture =  newValue
//     }
//     addDriver (driver){
//     this.driver = driver
//         return this.driver
//     }
// }
// let superDuperCar = new Car('Passat','Volkswagen',2019,220,2.0)
//     let newDriver = {
//     name : 'Bogdan',
//         age: 18
//     }
//     superDuperCar.addDriver(newDriver)
// console.log(superDuperCar)

//- (Те саме, тільки через клас)
// function Car (model, producer, yearOfManufacture, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//         this.info = function (){
//             for (const item in this) {
//                 console.log(`${item} - ${this[item]}`)
//             }
//     }
//         this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed
//     }
//         this.changeYear = function (newValue){
//         this.yearOfManufacture =  newValue
//     }
//         this.addDriver = function (driver){
//         this.driver = driver
//     }
// }
// let superDuperCar = new Car('Passat','Volkswagen',2019,220,2.0)
// superDuperCar.addDriver('Marta')
// superDuperCar.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Legend {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
// let popelushka1 = new Legend('Valya',21,31)
// let popelushka2 = new Legend('Katya',22,32)
// let popelushka3 = new Legend('Adriana',23,33)
// let popelushka4 = new Legend('Mery',24,34)
// let popelushka5 = new Legend('Sasha',25,35)
// let popelushka6 = new Legend('Karina',26,36)
// let popelushka7 = new Legend('Tanya',27,37)
// let popelushka8 = new Legend('Sam',28,38)
// let popelushka9 = new Legend('Olya',29,39)
// let popelushka10 = new Legend('Anya',24,36)
// let girlParty = [popelushka1,popelushka2,popelushka3,popelushka4,popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10]
//
// class PrinceCreator {
//     constructor(name, age, bootFind) {
//         this.name = name;
//         this.age = age;
//         this.bootFind = bootFind;
//     }
// }
// let prince = new PrinceCreator("Carl",26,35)
//
// let findMan = (arr) => {
//     for (const item of arr) {
//         if (item.footSize === prince.bootFind) {
//             console.log(item.name)
//         }
//     }
// }
// findMan(girlParty)
// let findArr = (arr) => arr.find(value => value.footSize === prince.bootFind)
// console.log(findArr(girlParty))