// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(responce => responce.json())
//     .then(value => {
//         const divWrap = document.createElement('div')
//         divWrap.setAttribute('class','wrap')
//         document.body.appendChild(divWrap)
//         for (let i = 0; i < value.length; i++) {
//             const valueElement = value[i];
//             let divPost = document.createElement('div');
//             divPost.setAttribute('class','inner')
//             divWrap.appendChild(divPost)
//             divPost.innerHTML = `<h2> UserId -${valueElement.userId} </h2>
//     <h2> ID - ${valueElement.id} </h2>
//     <h2> TITLE :${valueElement.title}  </h2>
//     <h2> BODY :${valueElement.body} </h2>`
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => response.json())
// .then(value => {
//     let divka = document.createElement('div');
//     document.body.appendChild(divka);
//     for (let i = 0; i < value.length; i++) {
//         const user = value[i];
//         let divComment = document.createElement('div');
//         divka.append(divComment);
//         for (const userComKey in user) {
//             let userCom = document.createElement('div')
//             userCom.innerHTML = `${userComKey} - ${user[userComKey]}`
//             divComment.append(userCom)
//         }
//     }
// })