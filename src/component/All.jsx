import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { capSID } from './SID.js';
import { useRef } from 'react';
import './style.css'

function All() {
    const [data, setData] = useState([])

    useEffect(() => {
        const storedData = localStorage.getItem('dataTodo');
        if (storedData) {
            setData(JSON.parse(storedData));
        }else{
            localStorage.setItem('dataTodo','[]')
        }
    }, []);

   
    // luu todo mới vào local
    const inputRef = useRef(null)
    
    const addTodo = () => {
        const newTodo = {
            id: capSID(),
            name: inputRef.current.value,
            state: true
        }

        const dataTodo = JSON.parse(localStorage.getItem('dataTodo'))
        const newDataTodo = [...dataTodo,newTodo]
        localStorage.setItem('dataTodo',JSON.stringify(newDataTodo))
        setData((prevItems) => [...prevItems, newTodo]);
        inputRef.current.value = '' 
    }
    // hadnlecheck
    const handleCheck = (e) => {
        console.log(e.target.id)
        const updateData = data.map((item) => 
            item.id === e.target.id 
            ? {...item, state: !item.state } 
            : item   
         )
         localStorage.setItem('dataTodo',JSON.stringify(updateData))
       setData(updateData)
    }
    return (
        <>
            <div>
                <input type="text" id="mytodo" ref={inputRef} placeholder='add details'  />
                <button type="submit" onClick={addTodo}>Add</button>
            </div>
            <div>
                {data.map((item) =>(
                    <label className='label' id={item.id}>
                    <input type="checkbox" checked={item.state} id={item.id} onClick={handleCheck} />
                    {item.name}
                    </label>

                ))

                }
            </div>
        </>
    )
}

export default All