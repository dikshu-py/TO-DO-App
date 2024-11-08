import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Main_layout() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/add");
    }
    
    const [users,setUser] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/akas')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
    const deleteItem = (id) =>{
        axios.delete(`http://localhost:3000/akas/${id}`)
        .then(response => {
          console.log('Item deleted:', response.data);
          // Remove the item from the state after deletion
          setUser(prevItems => prevItems.filter(item => item._id !== id));
        })
        .catch(error => {
          console.error("There was an error deleting the item!", error);
        });

    }
    
    






  return (
    <div className=' border-2 border-black rounded-md' >
        {/* Div for Add and Delete Search Box */}
       <div>
            <h1 className='font-bold text-3xl mt-2'>Todo List</h1>
       </div>


       {/* Div for the layout */}
        <div className='mt-6  '>
                <table className=' text-center w-[70vw]  gap-4 justify-between m-auto '>
                    <thead className='border-2 border-black rounded-md'>
                        <tr  >
                        <th className=' text-center h-[50px]'>Title </th>
                        <th className=' text-center h-[50px]'>Token </th>
                        <th className='text-center h-[50px]'>Discription</th>
                        <th className='text-center h-[50px]'>Time</th>
                        </tr>
                    </thead>
                    <tbody className='rounded border-2 border-black'>
                        {/* Check if users is an array before using map */}
                        {Array.isArray(users) && users.length > 0 ? (
                            users.map(user => (
                                <tr key={user._id} className='rounded border-[1px] border-black'>
                                    <td className='rounded border-[1px] border-black'>{user.title}</td>
                                    <td className='rounded border-[1px] border-black'>{user._id}</td>
                                    <td className='rounded border-[1px] border-black'>{user.description}</td>
                                    <td className='font-bold'>Today</td>
                                    <td className='rounded border-[1px] border-black '><button onClick={() => deleteItem(user._id)} className='bg-[#ABABAB] my-[6px] rounded border-[1px] border-black mb-2 px-2 hover:scale-105'>Delete</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No users found</td>
                            </tr>
                        )}

                    </tbody>
                    
                    
                    
            </table>
        </div>
       
       {/* Div for Add Item in List  */}
       <div className='m-4'>
            <button onClick={handleClick}    className='text-white hover:scale-110 font-bold bg-[#ABABAB]  border-2 border-black rounded p-2 w-[100px]'>ADD</button>
       </div>
    </div>
  )
}

export default Main_layout
