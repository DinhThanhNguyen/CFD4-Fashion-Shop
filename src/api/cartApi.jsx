import { domain } from './configApi'


export default {
    update: (data) => {
        return fetch(`${domain}cart/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    applyCode: (code) => {
        return new Promise((resolve, reject) => {
            resolve({ success: true })
        })
    }
}