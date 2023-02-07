import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(data => setToyList(data))
  }, [])
  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToyList={setToyList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} setToyList={setToyList} />
    </>
  );
}

export default App;
