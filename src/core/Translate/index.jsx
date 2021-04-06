import React, { useContext, useState } from 'react'

let initState = {
    default: 'en',
    // vi: {

    // },
    // en: {

    // }
}

let Context = React.createContext()

export default function TranslateProvider({ children }) {

    let [state, setState] = useState(initState)

    function setTranslate(initTranslate) {
        let { default: langeDefault } = initTranslate

        if(langeDefault) {
            localStorage.setItem('lange', langeDefault)
        }

        setState({
            ...state,
            ...initTranslate
        })
    }

    function t(key) {

        return state?.[state.default]?.[key] || key
    }

    let value = {
        t,
        setTranslate,
        default: state.default
    }


    return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useTranslate() {
    return useContext(Context)
}

export function setTranslate(initTranslate) {
    initState = {
        ...initState,
        ...initTranslate
    }
}