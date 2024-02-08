import React from 'react'

const TableCell = ({value}) => {

  return (

    <td className='main__td'>{JSON.stringify(value)}</td>
    
  )

}

export default TableCell;
