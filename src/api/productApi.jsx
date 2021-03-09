import { domain } from './configApi'

export default {
    catalog: (page = 1) => {
        return fetch(`${domain}product?page=${page}`)
            .then(res => res.json())
    }
}