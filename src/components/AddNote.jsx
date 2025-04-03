
import React,{useContext} from 'react'
import {UserContext} from '../context/UserContext'

const AddNote = () => {
    const { lightMode} = useContext(UserContext);

    // const { setUserId, setId, setTitle, setBody} = useContext(UserContext);
    const { notes, setNotes } = useContext(UserContext);
    const [formData, setFormData] = React.useState({
        userId: "",
        id:"",
        title:"",
        body:""
      })
      const handleChange = (e) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };
  


      const handleSubmit = (e) => {
        e.preventDefault();
        setNotes((prevNotes) => [...prevNotes, formData]);
        setFormData({ userId: "", id: "", title: "", body: "" });
        alert("Note Added!");
      };
  

  return (

   

     
     <div className={`${lightMode?'bg-white h-full text-black':'bg-black h-full text-white'}  bg-gray-200 p-8 flex flex-col items-center h-full `} >
      <h1 className='bg-slate-400 w-full text-center text-white px-4 py-2 m-4 '>Add Notes Here</h1>
     <div className='w-[60%]' >
     <form onSubmit={handleSubmit} className='flex flex-col space-y-4 p-8  bg-lime-50 border-none rounded-lg shadow-lg ' >
        <input onChange={handleChange} value={FormData.userid} className='p-2 bg-slate-200 rounded-md text-gray-300' type="text" name="userid" placeholder="Enter Your useID "/>
        <input onChange={handleChange} value={FormData.id} className='p-2 bg-slate-200 rounded-md text-gray-300' type="text" name="id" placeholder=" Enter Id"/>
        <input onChange={handleChange} value={FormData.title} className='p-2 bg-slate-200 rounded-md text-gray-300' type="text" name="title" placeholder=" Enter Title"/>
        <input onChange={handleChange} value={FormData.body} className='p-2 bg-slate-200 rounded-md text-gray-300' type="text" name='body' placeholder='Enter Description' />

        <button type='submit' className='bg-slate-200 p-2 flex w-[64px] rounded-md item-end justify-center shadow-sm'>Add</button>
  {/* //      <button className='bg-white flex w-[64px] rounded-lg item-center justify-center shadow-lg'>Del</button> */}
      </form>
     </div>
    </div>
    
    
    
  )
}

export default AddNote




