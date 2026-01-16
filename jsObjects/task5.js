const users = [
    {
        firstName: "Павло",
        lastName: "Павленко",
        age: 45
    },
    {
        firstName: "Тарас",
        email: "test@gmail.com",
        city: "Київ"
    },
    {
        lastName: "Кириленко",
        age: 62,
        addres: {
            country: "Україна",
            city: "Одеса",
            phone: "333-333-44"
        }
    },
    {
        firstName: "Дмитро",
        addres: {
            country: "Україна",
            city: "Дніпро",
            street: "Перемоги"
        },
        phone: {
            work: "444-666-77",
            home: "333-567-12"
        }
    }
]

for (let user of users) {
    for (let [key, value] of Object.entries(user)) {
        if (typeof (value) === "object") {
            for (let [key, innerValue] of Object.entries(value)) {
                console.log(`Key is: ${key} \nValue is: ${innerValue}`)
                console.log("/~/")
            }
        } else {
            console.log(`Key is: ${key} \nValue is: ${value}`)
            console.log("/~/")
        }
    }
    console.log("---------------------------------------")
}
