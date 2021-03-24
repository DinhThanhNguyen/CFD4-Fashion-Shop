import { domain } from './config'


export default {
    login: (data) => {
        return fetch(`${domain}elearning/v4/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    register: (data) => {
        return fetch(`${domain}elearning/v4/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    update: (data) => {
        return fetch(`/update.json`)
            .then(res => res.json())
    }
}