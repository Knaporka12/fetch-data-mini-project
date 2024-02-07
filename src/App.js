import React from 'react'
import Header from './Header.js';
import Nav from './Nav.js';
import ContentList from './ContentList.js';
import { useState, useEffect } from 'react'; 
import request from './dataRequest.js';

function App() {

  const API_KEY = 'https://jsonplaceholder.typicode.com';

  const [buttons, setButtons] = useState([
    {
      id: 0,
      checked: false,
      desc: 'users'
    },
    {
      id: 1,
      checked: false,
      desc: 'posts'
    },
    {
      id: 2,
      checked: false,
      desc: 'comments'
    },
  ]);
  const [content, setContent] = useState([]);
  const [requestType, setRequestType] = useState('');
  const [fetchError, setfetchError] = useState(null);

  const handleBtnColor = (btnId) => {

    const updatedBtns = buttons.map((btn) => {

      if (btn.id === btnId){

        return (
          {
            id: btn.id,
            checked: !btn.checked,
            desc: btn.desc
          }
        )

      } else { 

        return (
          {
            id: btn.id,
            checked: false,
            desc: btn.desc
          }
        )

      }

    });

    setButtons(updatedBtns);

  };

  useEffect(() => {

    const fetchAndSetContent = async () => {

      try {

        const [data, errorMsg] = await request(API_KEY, {}, requestType);
        console.log(errorMsg);
        if (!data.ok) throw Error(errorMsg);
        const dataJson = await data.json();
        setfetchError(null);
        setContent(dataJson);

      } catch (err) {
        setfetchError(err.msg);
      }

    }

    fetchAndSetContent();

  }, [requestType]);

  return (

    <div className="App">

      <Header></Header>
      
      <Nav 
        buttons={buttons}
        handleBtnColor={handleBtnColor}
        setRequestType={setRequestType}
      ></Nav>

      <main className='main'>

        {content.length && <h2 className="main__h2">Searching results: </h2> }

        {content.length && 

          <ContentList content={content}></ContentList> 

        }


        

      </main>

    </div>

  );
}

export default App;
