// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// const {name:inp1,age:inp2} = document.forms.f1;
// let button = document.getElementById('but');
// button.addEventListener('click',function (){
//     let name = inp1.value;
//     let age = inp2.value
//     const a = {name,age}
//     localStorage.setItem('key',JSON.stringify(a))
// })
//
//
// const {name,age} = document.forms.f1
// let button = document.getElementById('but');
// const localSave = (name,age) => {
//     const b = {name,age};
//     localStorage.setItem('KEY',JSON.stringify(b))
// }
// button.onclick = function (){
//     localSave(name.value,age.value)
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// const {model,type,volume} = document.forms.form1
// let button = document.getElementById('button');
// const localSave = (model,type,volume) => {
//     const b = JSON.parse(localStorage.getItem('CAR`S')) || []
//     b.push({model,type,volume})
//     localStorage.setItem('CAR`S',JSON.stringify(b))
// }
// button.onclick = function (){
//     localSave(model.value,type.value,volume.value)
// }