import React, { useEffect, useState } from 'react';
import Popup from './Popup';
import { CardProvider } from './contexts/CardsContext';
import './App.css';

const App = () =>{
  const[showPopup, setShowPopup] = useState(false);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
    },[]);

    const handleClosePopup = () =>{
      setShowPopup(false);
    }

    return(
      <CardProvider>
        <div className="App">
          {loading ? (
            <div>loading</div>
          ) : (
            showPopup && <Popup onClose={handleClosePopup}/>
          )}
          <h1>Cards</h1>
        </div>
      </CardProvider>
  );
};

export default App;
