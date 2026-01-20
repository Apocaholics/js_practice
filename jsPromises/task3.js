async function getToDo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if (!response.ok) {
            throw new Error("Request failed")
        }
        return await response.json()
    } catch (error) {
        console.error("An error occurred: ", error)
    }
}

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if (!response.ok) {
            throw new Error("Request failed")
        }
        return await response.json()
    } catch (error) {
        console.error("An error occurred: ", error)
    }
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