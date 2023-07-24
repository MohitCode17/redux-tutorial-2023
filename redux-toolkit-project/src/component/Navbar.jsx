import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=> state.cart)
  return (
    <div className='navbar'>
        <span>Shoppy</span>
        <div>
          <Link className='navLink' style={{fontWeight:"bolder"}}  to={"/"}>Home</Link>
          <Link   className='navLink' style={{marginRight:"7px",fontWeight:"bolder"}} to={"/cart"}>Cart</Link>
          <span style={{fontWeight:"bolder"}}>{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar