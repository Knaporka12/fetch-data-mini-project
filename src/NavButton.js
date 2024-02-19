import React from 'react'

const NavButton = ({handleBtnColor, setRequestType, buttons, id}) => {
  return (

    <>

        <button 
        
          className='nav__btn'
          style={{backgroundColor: buttons[id].checked ?'#0047AB' : 'white' }}
          
          onClick={() => {
            {handleBtnColor(id)}
            {setRequestType(buttons[id].desc)}
          }}

        >{buttons[id].desc}</button>

    </>

  )
}

export default NavButton;
