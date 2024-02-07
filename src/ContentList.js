import React from 'react'
import ListItem from './ListItem'

const ContentList = ({content}) => {

  console.log(content[6])
  return (
    <ul className='main__ul'>

      {content.map((contentObj) => {

        return (

          <ListItem

            key={contentObj.id}
            objId={contentObj.id}
            contentObj={contentObj}

          ></ListItem>

        )

      })}

    </ul>
  )
}

export default ContentList;
