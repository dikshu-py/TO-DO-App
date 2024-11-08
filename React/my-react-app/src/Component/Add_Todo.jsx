import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add_Todo  ()  {
    const [title,setitle] = useState("");
    const [description,setDiscription] = useState("");
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/aka",{title,description}).then(result => console.log(result)).catch(err => console.log(err))
    
    }
  return (
    <div className='flex flex-col w-[300px] h-[300px] border-[1px] border-black rounded '>
        <div className='w-[100%]'><h1 className='font-bold h-[50px] text-3xl mt-4 '>ADD Item</h1></div>


        <div className='w-[100%] flex '>
            <button onClick={handleClick}    className='justify-start ml-4 border-[1px] border-black bg-[#ABABAB] px-[10px] rounded'>Back</button></div>
        <div className='flex flex-col mt-4 '>
            <p className='w-[70%] text-left mx-auto font-bold'>Title</p>
            <input onChange={(e) => {setitle(e.target.value)}} className='w-[70%] text-left mx-auto border-2 border-[#ABABAB] rounded placeholder-gray-500 border px-2 ' placeholder="ADD Title Here" />
            <p className='w-[70%] text-left mx-auto font-bold mt-2'>Desciption</p>
            <input  onChange={(e) => {setDiscription(e.target.value)}}  className='w-[70%] text-left mx-auto border-2 border-[#ABABAB] rounded placeholder-gray-500 border px-2 ' placeholder="Desciption" />

        </div>
        <div className='mt-4 '>
            <button onClick={handlesubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Submit</button></div>
      
    </div>
  )
}

export default Add_Todo
