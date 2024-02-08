import React from 'react'
import TableCell from './TableCell.js'

const TableRow = ({contentObj}) => {

  return (

    <tr className='main__tr'>

      {Object.entries(contentObj).map(([key, value]) => {

        return (

          <TableCell 
            key={key}
            value={value}
          ></TableCell>

        )

      })}

    </tr>

  )
}

export default TableRow;
