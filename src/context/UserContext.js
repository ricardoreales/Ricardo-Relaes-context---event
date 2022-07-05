import { useState, createContext } from "react";

const UserContext = createContext() 

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState ({
        name:'',
        email:'',
        phone:''
    });

    const setUserLogin = (data) => {
        setUser({
            name:data.name,
            email:data.email,
            phone:data.phone
        })
    }

    return (
        <UserContext.Provider value={{ user, setUserLogin }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext
