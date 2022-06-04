// - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
//
//  const idP = document.getElementById('content')
//  console.log(idP.innerText)

// -- отримує текст з блоку з id "rules"
// const idDiv = document.getElementById('rules');
// console.log(idDiv.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
// const idP = document.getElementById('content')
// idP.innerText = 'HEY YOU'
// console.log(idP)

// -- замініть текст параграфа з id 'rules' на будь-який інший
// const idDiv = document.getElementById('rules');
// idDiv.innerText = 'You are rokstar';
// console.log(idDiv)

// // -- змініть кожному елементу колір фону на червоний
// const allRed = document.querySelectorAll('p,div,ul,li')
// for (let i = 0; i < allRed.length; i++) {
//     const element = allRed[i];
//     element.style.backgroundColor = 'red'
// }
// const children = document.body.children;
// for (const child of children) {
//     child.style.backgroundColor = 'red'
// }

// -- змініть кожному елементу колір тексту на синій
// const allBlue = document.querySelectorAll('*');
// for (let i = 0; i < allBlue.length; i++) {
//     const elem = allBlue[i];
//     elem.style.color = 'blue'
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(document.getElementById('rules').classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const redRules = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < redRules.length; i++) {
//     const elem = redRules[i];
//     elem.style.color = 'red'
// }


// Template2
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
// const header = document.getElementById('main_header');
// header.classList.add('Quen')
// console.log(header)

// b) робить шириниу елементу ul 400px
// const width = document.getElementsByTagName('ul')
// for (let i = 0; i < width.length; i++) {
//     const elem = width[i];
//     elem.style.width = '400px'
//     elem.style.padding= '0px'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const half = document.getElementsByClassName('linkList');
// for (let i = 0; i < half.length; i++) {
//     const elem = half[i];
//     elem.style.width = '50%'
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
// const text2 = document.getElementsByClassName('listElement2');
// for (let i = 0; i < text2.length; i++) {
//     const text2Element = text2[i];
//     console.log(text2Element.innerText)
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// const allLi = document.querySelectorAll('li');
// for (let i = 0; i < allLi.length; i++) {
//     const allLiElement = allLi[i];
//     allLiElement.style.backgroundColor = 'grey'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// const a = document.getElementsByTagName('a')
// for (const aElement of a) {
//     aElement.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const a3 = document.getElementsByTagName('a');
// for (const a3Element of a3) {
//     if (a3Element.textContent === 'link3'){
//         a3Element.style.fontSize = '40px'
//     }
//
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//  const aChange = document.getElementsByTagName('a');
//      for (const elem of aChange) {
//      elem.classList.add(`element_${elem.textContent}`)
//  }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const sub = document.getElementsByClassName('sub-header');
// let color = prompt('What color do you like?')
// for (const subElement of sub) {
//     subElement.style.backgroundColor = color
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадаку якщо текст елементу = content 2 segment . Колір отримати з prompt()
// const sub = document.getElementsByClassName('sub-header');
// let color = prompt('What color do you like?')
// for (const subElement of sub) {
//     if (subElement.textContent === 'content 2 segment'){
//         subElement.style.color = color
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
// let tex = prompt('what you wan`t?');
// const one = document.querySelector('.content_1')
// one.innerText = tex

// l) отримати елементи p та змінити їм padding на 20px
// const pP = document.querySelectorAll('p')
// for (const pPElement of pP) {
//     pPElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const text2E = document.getElementsByClassName('text2');
// for (const text2EElement of text2E) {
//      text2EElement.innerHTML = '<h1>march-2022</h1>'
// }