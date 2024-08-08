
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { capSID } from './SID.js';
import { useRef } from 'react';
import './style.css'
import '../App.css'
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Active() {
    const [data, setData] = useState([])

    useEffect(() => {
        const storedData = localStorage.getItem('dataTodo');
        if (storedData) {
           const dataActive = JSON.parse(storedData).filter(item => item.state !== true)
           localStorage.setItem('dataActive',JSON.stringify(dataActive))
            setData(dataActive);
        }else{
            localStorage.setItem('dataActive','[]')
        }
    }, []);

   
    // luu todo mới vào local
    const inputRef = useRef(null)
    
    const addTodo = () => {
        const newTodo = {
            id: capSID(),
            name: inputRef.current.value,
            state: false
        }

        const dataTodo = JSON.parse(localStorage.getItem('dataTodo'))
        const newDataTodo = [...dataTodo,newTodo]
        localStorage.setItem('dataTodo',JSON.stringify(newDataTodo))
        setData((prevItems) => [...prevItems, newTodo]);
        inputRef.current.value = '' 
    }
    // handle updatecheck
    const handleCheck = (e) => {
        const dataTodo = JSON.parse(localStorage.getItem('dataTodo') )
        const updateData = dataTodo.map((item) => 
            item.id === e.target.id 
            ? {...item, state: !item.state } 
            : item   
         )
         localStorage.setItem('dataTodo',JSON.stringify(updateData))
         const dataActive = updateData.filter(item => item.state !== true)
            setData(dataActive);
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
            <div>
            <input className='inputtodo' type="text" id="mytodo" ref={inputRef} placeholder='add details'  />
                <Button  onClick={addTodo} variant="contained" >Add</Button>
            </div>
            <div>
                {data.map((item) =>(
                    <label className='label' id={item.id}>
                    <input type="checkbox" checked={item.state} id={item.id} onClick={handleCheck} />
                    <span>{item.name}</span>
                    <Button id={item.id} onClick={handleDelete} startIcon={<DeleteOutlineIcon/>}></Button>
                    </label>
                    

                ))

                }
            </div>
            </div>
        </>
    )
}

export default Active