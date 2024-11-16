import React,{useState} from 'react';
import './App.css';
import Read from './/components/Read.js';
import Create from './/components/Create.js';
import Update from './/components/Update.js';
import Delete from './/components/Delete.js';


function App() {
  const [key,setKey]=useState(0);

  const reload=()=>{
    setKey(key=>key+1);
  };

  return (
    <div className="App">
      <Read key={key}/>
      <Create onActionComplete={reload}/>
      <Update onActionComplete={reload}/>
      <Delete onActionComplete={reload}/>
    </div>
  );
}

export default App;
