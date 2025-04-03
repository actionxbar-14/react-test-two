import React, {useState, createContext} from 'react'

export const UserContext = createContext()


const UserContextProvider = ({children}) =>{

  const [ userId , setUserId] = useState("")
  const [ id , setId] = useState("")
  const [title , setTitle] = useState("")
  const [ body, setBody] = useState("")
  const [ lightMode, setLightMode ] = useState(false)
  const [notes, setNotes] = useState([]);

  const requiredVal = {
    userId,
    setUserId,
    id,
    setId,
    title,
    setTitle,
    body,
    setBody,
    lightMode,
    setLightMode,
    notes,
    setNotes
  }

  return (
    <UserContext.Provider value = {requiredVal}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;