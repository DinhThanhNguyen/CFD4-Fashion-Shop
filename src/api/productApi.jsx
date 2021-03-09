import { domain } from './configApi'

export default {
    catalog: () => {
        return fetch(`${domain}product`)
            .then(res => res.json())
    }
}