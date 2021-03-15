export default {
    faq: () => {
        return fetch(`/faq.json`)
            .then(res => res.json()
        )
    }
}