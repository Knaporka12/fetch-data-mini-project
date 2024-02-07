import React from 'react'

const ListItem = ({contentObj}) => {
  return (

    <li className='main__li'>

      {JSON.stringify(contentObj)}

    </li>

  )
}

export default ListItem;
