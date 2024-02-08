import React from 'react'
import TableRow from './TableRow.js'

const ContentTable = ({content}) => {
  return (

    <table className='main__table'>

        <tbody>

            {content.map((contentObj) => {

              return (

                <TableRow
                  key={contentObj.id}
                  contentObj={contentObj}
                ></TableRow>

              )

            })}

      </tbody>  

    </table>

  )
}

export default ContentTable;
