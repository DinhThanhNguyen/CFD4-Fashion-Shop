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

    function t(key) {

        return state?.[state.default]?.[key] || key
    }

    function setTranslate(initTranslate) {
        let { default: langDefault } = initTranslate
        if (langDefault) {
            localStorage.setItem('lang', langDefault)
        }


        setState({
            ...state,
            ...initTranslate,
        })
    }

    let value = {
        t,
    }


    return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useTranslate() {
    return useContext(Context)
}

export function setTranslate(initTranslate) {
    let { default: langDefault } = initTranslate
    if (langDefault) {
        localStorage.setItem('lang', langDefault)
    }
    initState = {
        ...initState,
        ...initTranslate
    }
}