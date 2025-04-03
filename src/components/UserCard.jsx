import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const UserCard = ({item}) => {
  const {userId, id, title, body} = item;
  const {items, setItems } = useContext(UserContext);
  const deleteNote = (id) =>{
    setItems(items.filter((itm) => itm.id !== id));
      

  }
//   const{itm ,setItm} = useContext(itmContext);

  return (
    <div className='bg-slate-300 text-grey-400 p-4 m-3 rounded-md shadow-lg'>
      <p><b>UserId :</b> {userId}</p>
      <p><b>ID :</b> {id}</p>
      <p><b>Title :</b> {title}</p>
      <p className='py-2'><b>body : </b>{body}</p>
      <button className='bg-red-600 p-1 rounded-md' onClick={()=> deleteNote(note.id)}> delete </button>
    </div>
  )
}

export default UserCard