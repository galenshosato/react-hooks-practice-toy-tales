import React from "react";

function ToyForm({setToyList}) {
  function onFormSubmit (event) {
    event.preventDefault()

    const newToy = {
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0
    }

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newToy)
    })
      .catch(error => console.log(error))

      setToyList(prev => [...prev, newToy])
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
