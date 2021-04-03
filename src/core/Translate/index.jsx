import React from 'react'

let Context = React.createContext()

export default function TranslateProvider({ children }) {


    function t() {

    }

    let value = {
        t, 
    }


    return <Context.Provider value={value}>{children}</Context.Provider>
}