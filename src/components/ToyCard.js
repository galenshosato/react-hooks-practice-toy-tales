import React from "react";
import { useState } from "react";

function ToyCard({toy, setToyList, toyList}) {
  const [updatedLikes, setLikes] = useState(toy.likes)

  function handleLikeClick (event) {
     //setLikes(prev => prev + 1)
     //updating one click behind everything else
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: updatedLikes })
    })
    .then(resp => resp.json())
    
  }

  function handleDeleteClick(event) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp=>resp.json())

    
    //Figure out how to update the DOM for DELETE
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{updatedLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
