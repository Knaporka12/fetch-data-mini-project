import React from 'react'
import ListItem from './ListItem'

const ContentList = ({content}) => {

  return (

    <ul className='main__ul'>

      {content.map((contentObj) => {

        return (

          <ListItem
            key={contentObj.id}
            contentObj={contentObj}
          ></ListItem>

        )

      })}

    </ul>
    
  )
}

export default ContentList;
