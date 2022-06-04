// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let Squere = (a,b) => a*b
// console.log(Squere(3,4))


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let squereC = (r) => {console.log(3.14 * r*r)}
// squereC(2)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par = (text) => document.write(`<p>${text}</p>`)
// par('heyyyyyy')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulll= (text) =>{
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// ulll('also you are bad guy')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ull = (text,a) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < a; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ull('hey now, you are rockstar',100)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mass = [1,true,'hey','you','are',false]
//
// let ullll = (arr) => {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ullll(mass)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let robbers = [
//     {id:1, name:'olya', age:23},
//     {id:2, name:'kolya', age:22}
//  ]
// let objIter = (arr) =>{
//     for (const obJ of arr) {
//         document.write(`<div>${obJ.id} ${obJ.name} ${obJ.age}</div>`)
//     }
// }
// console.log(objIter(robbers))


// - створити функцію яка повертає найменьше число з масиву
// let nums = [10,1,6,30,9,2];
// let minNum = (arr) =>{
//     let min = arr[0]
//     for (const item of arr) {
//         if (item < min){
//             min = item
//         }
//     }
//     console.log(min)
// }
// minNum(nums)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let nums = [10,1,6,30,9,2];
// let summ = (arr) =>{
//     let sum = 0
//     for (const item of arr) {
//         sum = sum + item
//     }
//     console.log(sum)
// }
// summ(nums)


// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let robbers = [
//     {id:1, name:'olya', age:23},
//     {id:2, name:'kolya', age:22}
//  ]
//
// let switchObj = (arr) =>{
//     let arr2 = []
//     for (let i = arr.length-1; i >= 0; i--) {
//        arr2.push(arr[i])
//
//     }
//     console.log(arr2)
// }
// switchObj(robbers)
// let swith = (arr) => {
//     let o = arr[0];
//     arr[0] = arr[1];
//     arr[1] = o;
//     return arr;
// }
// console.log(swith(robbers))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let nums = [10,1,6,30,9,2];
// let minMax = (arr) =>{
//     let min = nums[0];
//     let max = nums[0];
//     for (const num of arr) {
//         if (num < min){
//             min = num
//         }
//         else if (num > max){
//             max = num
//         }
//     }
//     console.log(max)
//     return min
//
// }
// minMax(nums)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = () =>{
//     let arr = []
//     for (let i = 0; i < 7; i++) {
//         // arr.push(Math.round(Math.random()*100))
//         arr[i] = Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log( random())

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let random = (limit) =>{
//     let arr = []
//     for (let i = 0; i < 7; i++) {
//         // arr.push(Math.round(Math.random()*100))
//         arr[i] = Math.round(Math.random()*limit)
//     }
//     return arr
// }
// console.log( random(5))

// let nums = [10,1,6,30,9,2];
// let randPush = (arr,limit,number) =>{
//     for (let i = 0; i < number; i++) {
//         arr.push(Math.round(Math.random()*limit))
//     }
//     return arr
// }
// console.log(randPush(nums,50,100))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let nums = [10,1,6,30,9,2];
// let backMass = (arr) =>{
//     let revers = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         revers.push(arr[i])
//     }
//     return revers
// }
// console.log(backMass(nums))

// let nums = [10,1,6,30,9,2];
// let backMass = (arr) =>{
//     let revers = [];
//     for (let i = arr.length - 1,j = 0; i >= 0; i--,j++) {
//         revers[j] = arr[i]
//     }
//     return revers
// }
// console.log(backMass(nums))

// let nums = [10,1,6,30,9,2];
// let backMass = (arr) =>{
//     let revers = [];
//     for (let i = 0; i < arr.length; i++) {
//         revers.push(arr[arr.length-1 - i])
//
//     }
//     return revers
// }
// console.log(backMass(nums))














// let filter = arr.filter(function (item) {
//     console.log(item)
// })










// function nothing(fn) {
//     fn()
// }
// let string = () => console.log("HEy")
// nothing(string)


