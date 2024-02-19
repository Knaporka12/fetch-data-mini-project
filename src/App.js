import React from 'react'
import Header from './Header.js';
import Nav from './Nav.js';
import ContentList from './ContentList.js';
import ContentTable from './ContentTable.js';
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
  const [isDataLoading, setIsDataLoading] = useState(false);

  

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

      if (requestType){

        setIsDataLoading(true);

        setTimeout (async() => {
          
          try {

          const [data, errorMsg] = await request(API_KEY, {}, requestType);
          if (errorMsg) throw Error('Did not receive data - refresh the page')
          const dataJson = await data.json();
          setfetchError(null);
          setContent(dataJson);

          } catch (err) {
            setfetchError(err.message);
          } finally {
            setIsDataLoading(false);
          }
        }, 500)

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

        {(!fetchError && !isDataLoading && content.length === 0) && <h2 style={{color: 'blue'}} className="main__h2">Choose the data from above</h2>}

        {(fetchError && !isDataLoading) && <h2 style={{color: 'red'}} className="main__h2">{fetchError}</h2>}

        {isDataLoading && <h2 style={{color: 'blue'}} className="main__h2">Loading the data...</h2>}

        {(content.length > 0 && !isDataLoading) && <h2 className="main__h2">Searching results: </h2> }

        {(content.length > 0 && !isDataLoading) && 

          <ContentTable content={content}></ContentTable> 

        }

      </main>

    </div>

  );
}

export default App;
