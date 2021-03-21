import { domain } from './configApi'

export default {
    catalog: (page) => {
        return fetch(`${domain}product?${page}`)
            .then(res => res.json())
    },
    search: (keyword = '') => {
        return fetch(`${domain}product?search=${keyword}`)
            .then(res => res.json())
    } 
}