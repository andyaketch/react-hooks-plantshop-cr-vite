import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} 
                   plant={plants} />
      ))}
    </ul>
  );
}

export default PlantList;
