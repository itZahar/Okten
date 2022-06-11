window.onload = async function () {
    let a = localStorage.getItem('user');
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${a}`);
    const value = await response.json();
    let user = document.createElement('div');
    user.setAttribute('class','user')
    document.body.appendChild(user);
    user.innerHTML = `ID - ${value.id} Name - ${value.name} Username - ${value.username}
                ${value.email} <br> Address : Street - ${value.address.street} Suit - ${value.address.suite}
                City - ${value.address.city} Zipcode - ${value.address.zipcode} <br> Geo -
                Lat -${value.address.geo.lat} Lng -${value.address.geo.lng} <br> Phone - ${value.phone}
                <br> Website - ${value.website} <br> Company: Name - ${value.company.name}  CatchPhrase - ${value.company.catchPhrase}
                BS - ${value.company.bs} <br>`
    fetch(`https://jsonplaceholder.typicode.com/users/${a}/posts`)
        .then(response => response.json())
        .then(value => {
            let titles = document.createElement('div');
            document.body.appendChild(titles)
            titles.style.display === "none"
            let butPost = document.createElement('button');
            butPost.setAttribute('class','but');
            butPost.innerHTML = `post of current user`;
            document.body.appendChild(butPost);
            for (let i = 0; i < value.length; i++) {
                const post = value[i];
                let title = document.createElement('p');
                title.setAttribute('class','title')
                title.innerHTML = `Title ${i+1} - ${post.title}`
                titles.append(title);
                let but = document.createElement('button')
                but.setAttribute('class','button')
                but.innerHTML = `Info`
                title.append(but)
                but.onclick = function (e){
                    document.location.href = 'post-details.html';
                }
                titles.classList.add('hide')
            }
            butPost.onclick = function (){
                titles.classList.toggle('vision',)
                titles.classList.toggle('wrap')
            }
        })
}