import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import {UserContext} from '../context/UserContext'
// import UserContextProvider from '../context/UserContext'

const Home = () => {
    const [data, setData] = useState([])
    const {notes} = useContext(UserContext)
    // const [loading, setLoading] = ReuseState(true)



    const API = "https://jsonplaceholder.typicode.com/posts?_limit=8"
    const { lightMode} = useContext(UserContext);

    const getData = async ()=> {
        try {
         const res = await axios.get(API)
        console.log(res.data)
        setData(res.data)
        } catch (error) {
         console.log(error)
        }
   }

    
  useEffect(() =>{
    getData();
  },[])



   
 

  return (
    <div className={`${lightMode?'bg-white h-full text-black':'bg-black h-full text-white'} h-screen`}>

        {/* <h1>Home Page</h1> */}
        <div>
        <h1 className='bg-slate-400 text-center text-white px-4 py-2 '>Notes History</h1>
      </div>
       <ul className=' bg-slate-400 p-4 grid grid-cols-3 gap-3 w-[85%] mx-auto'>
        {
          data.map((item )=>{
            return(
              <UserCard key={item.userId}  item ={item} />
            )
          })
        }
          {notes?.map((item, index) => (
          <UserCard key={index} item={item} />
        ))}

       </ul>
      

        
      
    </div>
  )
}

export default Home
