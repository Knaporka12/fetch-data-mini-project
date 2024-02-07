import React from 'react'
import NavButton from './NavButton.js'

const Nav = ({handleBtnColor, setRequestType, buttons}) => {
  return (

    <nav className='nav'>

      {buttons.map((button) => {
        
        return (

          <NavButton

            key={button.id}
            handleBtnColor={handleBtnColor}
            setRequestType={setRequestType}
            buttons={buttons}
            id={button.id}

          ></NavButton>

        )

      })}

    </nav>

  )
};

export default Nav;
