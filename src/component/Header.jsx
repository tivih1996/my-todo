import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <h1>#todo</h1>
    <div>
    <button> <Link to ="/all"> All</Link> </button>
    <button> <Link to ="/active"> Active</Link> </button>
    <button> <Link to ="/complete"> Complete</Link> </button>
    </div>
    </>
  )
}

export default Header