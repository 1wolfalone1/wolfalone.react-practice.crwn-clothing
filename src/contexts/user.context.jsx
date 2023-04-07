
import {createContext, useState} from 'react'


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    ahihi: '111111111111111'
})

export const UserProvider = (({children}) => {
    const[currentUser, setCurrentUser] = useState(null);
    const[ahihi, setAhihi] = useState("341234123412341234");
    const value = {currentUser, setCurrentUser, ahihi, setAhihi}

    return<UserContext.Provider value={value}>{children}</UserContext.Provider>
})