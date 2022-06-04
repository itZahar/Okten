// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const text = document.createElement('div');
// text.innerHTML = 'HEY';
// text.setAttribute('id','text');
// const button = document.createElement('button');
// button.innerHTML = 'Click here';
// document.body.append(text,button);
// button.onclick = function (e) {
//     text.style.display = 'none'
// }
// button.onclick = function (e) {
//     text.remove();
// }
// button.onclick = function (e) {
//     text.style.visibility = 'hidden'
// }


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let form = document.forms.f1
// form.onsubmit = function (e){
//     e.preventDefault();
//     let value = form.age.value;
//     if (value >= 18){
//         alert('You make come in')
//     }else if (value === ''){
//         alert('Try again')
//     }
//     else {
//         alert("Go to your mommy")
//     }
// }
//
// const input = document.createElement('input');
// input.type = 'number';
// let button = document.createElement('button');
// button.innerText = 'Click here'
//
// document.body.append(input,button);
// button.addEventListener('click',function (e){
//     if(input.value >= 18){
//         alert('Well done old man')
//     }else if(input.value === ''){
//         alert('click some number pls')
//     }else { alert('You are to little, go to your mommy')}
//     input.value = ''
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.getElementById('butt');
// button.addEventListener('click',function (e){
//     const form1 = document.forms.form1;
//     let form2 = document.forms.form2;
//     let gender = ''
//     if (form2.gender){
//         gender = 'MALE'
//     }else gender = 'FEMALE'
//     console.log(`USERNAME - ${form1.username.value}
//     EMAIL - ${form1.useremail.value}
//
//     GENDER - ${gender}
//     AGE - ${form2.age.value}`)
// })


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// const in1 = document.createElement('input');
// in1.type = 'number';
// const in2 = document.createElement('input');
// in2.type = 'number'
// const in3 = document.createElement('input');
// const but = document.createElement('button');
// but.innerText = 'Create a table'
// document.body.append(in1,in2,in3,but)
//
// but.addEventListener('click',function (){
//     let table = document.createElement("table");
//     document.body.appendChild(table)
//     const trNum = in1.value;
//     const tdNum = in2.value;
//
//     for (let i = 0; i < trNum; i++) {
//         let tr = document.createElement('tr');
//         table.append(tr);
//         tr.innerText = `Рядок - ${i+1}`
//         for (let j = 0; j < tdNum; j++) {
//             let td = document.createElement('td');
//             tr.append(td);
//             td.innerText = in3.value
//             td.style.border = 'solid 1px yellow'
//         }
//
//     }
// })