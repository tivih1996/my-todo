import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import './style.css'
import '../App.css'
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Complete() {
    const [data, setData] = useState([])

    useEffect(() => {
        const storedData = localStorage.getItem('dataTodo');
        if (storedData) {
           const dataComplete = JSON.parse(storedData).filter(item => item.state === true)
           localStorage.setItem('dataComplete',JSON.stringify(dataComplete))
            setData(dataComplete);
        }else{
            localStorage.setItem('dataComplete','[]')
        }
    }, []);

   
   
    // handle updatecheck
    const handleCheck = (e) => {
        const dataTodo = JSON.parse(localStorage.getItem('dataTodo') )
        const updateData = dataTodo.map((item) => 
            item.id === e.target.id 
            ? {...item, state: !item.state } 
            : item   
         )
         localStorage.setItem('dataTodo',JSON.stringify(updateData))
         const dataComplete = updateData.filter(item => item.state === true)
            setData(dataComplete);
    }
    // handle delete
    const handleDelete =(e) => {
        const updateData = data.filter(item => item.id !== e.target.id )
         localStorage.setItem('dataTodo',JSON.stringify(updateData))

       setData(updateData)
    }
    return (
        <>
            <div className='App'>
                {data.map((item) =>(
                    <label className='label' id={item.id}>
                    <input type="checkbox" checked={item.state} id={item.id} onClick={handleCheck} />
                    <span>{item.name}</span>
                    {/* <button id={item.id} onClick={handleDelete} >Xoá</button> */}
                    <Button id={item.id} onClick={handleDelete} startIcon={<DeleteOutlineIcon/>}></Button>
                    </label>
                    
                ))

                }
            </div>
        </>
    )
}

export default Complete