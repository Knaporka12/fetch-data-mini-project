import React from 'react'

const Nav = ({handleBtnColor, buttonCheck}) => {
  return (

    <nav className='nav'>
    
        <button className='nav__btn'
            style={{backgroundColor: buttonCheck[0].checked ?'#0047AB' : 'white' }}
            onClick={() => {handleBtnColor(1)}}
        >Users</button>
     
        <button className='nav__btn'
            style={{backgroundColor: buttonCheck[1].checked ?'#0047AB' : 'white' }}
            onClick={() => {handleBtnColor(2)}}
        >Posts</button>
     
        <button className='nav__btn'
            style={{backgroundColor: buttonCheck[2].checked ?'#0047AB' : 'white' }}
            onClick={() => {handleBtnColor(3)}}
        >Something</button>

    </nav>

  )
};

export default Nav;
