// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б4

// function squareS(a,b) {
//         return a * b
// }
// console.log(square(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareCircle(r){
//     return 3.14 * (r * r)
// }
// let num1 = squareCircle(5)
// console.log(num1)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareB(h,r) {
//     return 2 * 3.141592653589793238462643 * r * r + 2 * 3.14 * r * h
// }
// let num2 = squareB(2,3)
// console.log(num2)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = ['dasd',24,'qwe']
// function itterator(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// itterator(arr)
// function arrShow(array) {
//     for (const item of array) {
//         console.log(item)
//     }
// }
// arrShow([23,'adsafa',123,'-'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function par(text) {
//     document.write(`<p>${text}</p>`)
// }
// par('if i whant i change the world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function elem(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`)
// }
// elem('i am unstopoble')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function limaker2(text,a) {
//     document.write(`<ul>`)
//     for (let i = 0; i < a; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//
//     document.write(`</ul>`)
// }
// limaker2('whas is das',12)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1,'two',true]
// function list(arr) {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let robbers = [
//     {id:1, name:'olya', age:23},
//     {id:2, name:'kolya', age:22}
// ]
// function itterOb(arr) {
//     for (const robber of robbers) {
//         document.write(`<div> id - ${robber.id} name - ${robber.name} age - ${robber.age}</div>`)
// }
// }
// itterOb(robbers)

// - створити функцію яка повертає найменьше число з масиву

// let nums = [10,1,6,30,9,2]
// function minNum(arr) {
//     let min = arr[0]
//     for (const arrElement of arr) {
//         if (min > arrElement){
//             min = arrElement
//         }
//     }
//     console.log(min)
// }
// minNum(nums)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let nums = [10,1,9,-5]
//
// function calc(arr) {
//     let sum = 0
//     for (const num of arr) {
//         sum = sum + num
//     }
//     return sum
// }
//
// console.log(calc(nums));