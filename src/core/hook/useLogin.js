import React, { useContext, useState } from "react";


const Context = React.createContext({});

let saveLogin = null
try{
    saveLogin = JSON.parse(localStorage.getItem('login'))
}catch(err){

}

export default function AuthProvider({ children }) {
    let [login, setLogin] = useState(saveLogin);

    function activeLogin(data) {
        if(data){
            if(data){
                addToken(data.token)
            }
            localStorage.setItem('login',JSON.stringify(data))
            setLogin(data)
        }
    }

    function logOut() {
        localStorage.removeItem('login')
        setLogin(null)
        return false;
    }
    return <Context.Provider value={{ login, activeLogin, logOut }}>{ children }</Context.Provider>
}

export function useLogin() {
    return useContext(Context)
}
export function addToken(data) {
    localStorage.setItem('token', JSON.stringify(data))
}
export function getToken() {
    let token = JSON.parse(localStorage.getItem('token'));
    return token.accessToken
}