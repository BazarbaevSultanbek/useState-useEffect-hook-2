import { useState } from 'react'
import './App.css'
import Load from './components/load/Load';
import Fetch from './components/pageLoad/Fetch';
import Time from './components/time/Time';

function App() {
  const [page, setPage] = useState("Time");
  const ModifyPage = () => {
    switch (page) {
      case "Time":
        return <Time />   
      case "Fetch":
        return <Fetch />
      case "Load":
        return <Load />;
    }
  }
  return (
    <div className='App'>
      <h1>HomeWork(useState, useEffect)</h1>
      <div className="App-buttons">
        <button onClick={() => setPage("Time")}>Time</button>
        <button onClick={() => setPage("Fetch")}>User</button>
        <button onClick={() => setPage("Load")}>Comments</button>
      </div>
      <div className="page-content">{ModifyPage()}</div>
    </div>
  );
}

export default App
