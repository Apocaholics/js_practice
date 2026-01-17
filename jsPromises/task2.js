function getToDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
}

const promiseCollection1 = Promise.all([getToDo(), getUser()])
    .then(([toDo, user]) => {
        console.log(toDo)
        console.log(user)
    })

const promiseCollection2 = Promise.race([getToDo(), getUser()])
    .then(response => console.log(response))