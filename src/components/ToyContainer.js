import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, setToyList}) {



  return (
    <div id="toy-collection">
      {toyList.map(toy => {
        return (
          <ToyCard key={toy.id} toy={toy} setToyList={setToyList} toyList={toyList} />
        )
      })}
    </div>
  );
}

export default ToyContainer;
