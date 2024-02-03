import Header from './Header.js';
import Nav from './Nav.js';
import { useState } from 'react'; 

function App() {

  const [buttonCheck, setIsBtnChecked] = useState([
    {
      id: 1,
      checked: false
    },
    {
      id: 2,
      checked: false
    },
    {
      id: 3,
      checked: false
    },
  ]);

  const handleBtnColor = (btnId) => {

    const updatedBtns = buttonCheck.map((btn) => {

      if (btn.id === btnId){

        return (
          {
            id: btn.id,
            checked: !btn.checked
          }
        )

      } else { 

        return (
          {
            id: btn.id,
            checked: false
          }
        )

      }

    });

    setIsBtnChecked(updatedBtns);

  };

  return (

    <div className="App">

      <Header></Header>
      
      <Nav 
        buttonCheck={buttonCheck}
        handleBtnColor={handleBtnColor}
      ></Nav>

      <main className='main'>

        <h2 className="main__h2">Searching results: </h2>

      </main>

    </div>

  );
}

export default App;
