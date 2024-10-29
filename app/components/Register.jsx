  'use client'
  
  import Reactt,{useState} from 'react'
  import axios from 'axios'

export const Register = () => {

    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");

    const handlesubmit =async(e)=>{
        e.preventDefault();
        const response =await axios.post('/api/register',
        {username,password});
        console.log(response.data)
       if (response.status===200){
            alert("Registration complete")
        }
        alert("Registration failed")
    }
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <form onSubmit={handlesubmit}>
            <div className='p-10 border'> 
            <input type='Username' placeholder='Username' 
            value={username} onChange={(e)=>setUsername(e.target.value)}
            required/>
             </div>
             <div className='p-10 border'>  
             <input type='Password' placeholder='Password' 
            value={password} onChange={(e)=>setPassword(e.target.value)}
            required/>
             </div>
             <button className='border' type='Submit'>
                Register
             </button>
        </form>
        </div>
  )
}
