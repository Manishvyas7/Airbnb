import React, { createContext } from 'react'
import { useContext } from 'react'
import { AuthDataContext } from './AuthContext'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export const userDataContext = createContext()
function UserContext({children}){
    let {serverUrl} = useContext(AuthDataContext)
    let [userData, setUserData] = useState(null)
    const getCurrentUser = async () => {
        try{
            let result = await axios.get(serverUrl + "api/user/currentuser", {withCredentials:true})
            setUserData(result.data)
        }catch(error){
            setUserData(null)
            console.log(error)
        }
    }
    useEffect(()=>{
        getCurrentUser()
    },[])
    let value={
        userData,
        setUserData
    }
    return(
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext