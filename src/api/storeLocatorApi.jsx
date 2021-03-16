export default {
    map: () => {
        return fetch(`/storeLocator.json`)
            .then(res => res.json()
        )
    }
}