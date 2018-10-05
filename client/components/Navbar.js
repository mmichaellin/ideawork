import React from 'react'

const Navbar = props => {
  return (
    <div className="navbar">
      <img src={window.location.origin + '/logo.png'} className="logo" />
      <img src={window.location.origin + '/hamburger.png'} className="hamburger" />
      <a href="#" className="navlink underline" >LOGIN</a>
      <a href="#" className="navlink underline" >212.555.5555</a>
    </div>
  )
}

export default Navbar
