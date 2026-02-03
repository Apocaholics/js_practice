const axios = require('axios');

describe('API testing', () => {

    test('Get all posts', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        expect(response.status).toEqual(200)
        expect(response.data[0].title).toContain("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        expect(response.data[0].body).toContain("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
    })

    test('Get first post', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        expect(response.status).toEqual(200)
        expect(response.data.title).toContain("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        expect(response.data.body).toContain("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
    })

    test('Create new post', async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                "title": "Lorem ipsum, Lorem ipsum",
                "body": "Lorem ipsum, Lorem ipsum"
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        expect(response.status).toEqual(201)
        expect(response.data.title).toContain("Lorem ipsum, Lorem ipsum")
        expect(response.data.body).toContain("Lorem ipsum, Lorem ipsum")
    })

    test('Update title for post', async () => {
        const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1',
            {
                "title": "Updated title for post id number 1",
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        expect(response.status).toEqual(200)
        expect(response.data.id).toEqual(1)
        expect(response.data.title).toContain("Updated title for post id number 1")
        expect(response.data.body).toContain("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
    })

    test('Delete post', async () => {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        expect(response.status).toEqual(200)
    })
})
