fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        let divka = document.createElement('div');
    document.body.appendChild(divka);
    divka.setAttribute('class','father')
    for (let i = 0; i < value.length; i++) {
        const user = value[i];
        let divUser = document.createElement('div');
        divUser.innerHTML = `${user.id} ${user.name} `
        divUser.classList.add('pare')
        divka.appendChild(divUser);
        let but = document.createElement('button')
        but.setAttribute('class','button')
        but.innerHTML = `Info`
        divUser.append(but)
        but.onclick = function (e){
            find (user.id)
        }
    }
    })
let find = (id) => {
    localStorage.setItem('user',id)
    document.location.href = "user-details.html"
}

