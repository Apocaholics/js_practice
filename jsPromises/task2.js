function getToDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
}

const promiseCollection1 = Promise.all([getToDo(), getUser()])
    .then(([toDo, user]) => {
        const toDoResponse = toDo
        const userResponse = user

        return { toDoResponse, userResponse }
    })
    .then(({ toDoResponse, userResponse }) => {
        console.log(toDoResponse)
        console.log(userResponse)
    })

const promiseCollection2 = Promise.race([getToDo(), getUser()])
    .then((response) => {
        const data = response

        return data
    })
    .then((data) => console.log(data))