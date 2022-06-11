window.onload = async function () {
    let item = localStorage.getItem('user');
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${item}`);
    const value = await response.json();
    const post = document.createElement('div');
    post.setAttribute('class','post');
    post.innerHTML = `<h2>POST of current user</h2>ID -${value.id} <br> User Id - ${value.userId}<br> Title - ${value.title}<br> Body - ${value.body}`
    document.body.appendChild(post)
    const responsee = await fetch(`https://jsonplaceholder.typicode.com/posts/${item}/comments`);
    const valuee = await responsee.json()
    const comments = document.createElement('div');
    comments.setAttribute('class','comments');
    document.body.appendChild(comments)
        for (let i = 0; i < valuee.length; i++) {
        const valueElement = valuee[i];
        let comment = document.createElement('div');
        comment.setAttribute('class','comment');
        comment.innerHTML = `<h2>COMMENT${i + 1}</h2><br>ID -${valueElement.id} <br> Post Id - ${valueElement.postId}<br> 
                    Name - ${valueElement.name}<br> Email - ${valueElement.email}<br> Body - ${valueElement.body}`
        comments.appendChild(comment)
        }
    }
