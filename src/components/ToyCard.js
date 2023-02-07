import React from "react";

function ToyCard({toy, setToyList}) {

  function handleLikeClick (event) {
     //setLikes(prev => prev + 1)
     //updating one click behind everything else
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: toy.likes + 1 })
    })
    .then(resp => resp.json())
    .then(updated => {
      setToyList(prev => prev.map(newToy => {
        if (newToy.id === toy.id) {
          return updated
        } else {
          return prev
        }
      }))
    })
    .catch(error => console.log(error))
  }

  function handleDeleteClick(event) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    setToyList(prev => {
      return prev.filter(newToy => {
        return newToy.id !== toy.id
      })
    })
    
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
