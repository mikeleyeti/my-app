import { useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/Categories.css";

function Categories({activeCategory, updateActiveCategorie }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="lmj-categories">
    <select 
        value={activeCategory}
        onChange={ (e) => updateActiveCategorie(e.target.value) }
        className = 'lmj-categories-select'>
      {/* <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul> */}
      <option value=''>---</option>
      {categories.map( (cat) => (
        <option key={cat} value={cat} > {cat} </option>
      )
      )}
      </select>
      <button onClick={() => updateActiveCategorie('')}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
