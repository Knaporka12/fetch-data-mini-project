import React from 'react'
import TableCell from './TableCell.js'

const TableRow = ({contentObj}) => {

  const iterateThroughObj = (obj) =>{

    return Object.entries(obj).map(([key, value]) => {
      
      if(typeof value === 'object') {

        return iterateThroughObj(value)
        
      }

      console.log(value);
      return (

        <TableCell 
          key={key}
          value={value}
        ></TableCell>

      )

    })

  }

  iterateThroughObj(contentObj);

  return (
    
    <tr className='main__tr'>

      {iterateThroughObj(contentObj)};      

    </tr>

  )
}

export default TableRow;
