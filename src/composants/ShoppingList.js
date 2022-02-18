import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

function ShoppingList() {
  // Méthode 1 "bourin"
  //   const categories = ["test1", "test2", "test3", "test1"];
  //   const cat_uniques = [];
  //   for (let index = 0; index < categories.length; index++) {
  //       const element = categories[index];
  //       console.log(element)
  //       if (! cat_uniques.includes(element)) {
  //           cat_uniques.push(element)
  //       }
  //   }

  // Méthode 2 avec Reduce
  //   const cat_uniques = plantList.reduce(
  //       (acc, plante) => acc.includes(plante.category) ? acc : acc.concat(plante.category),
  //       []
  //   )

  //   Méthode 3 avec forEach
  const cat_uniques = [];
  plantList.forEach((elem) =>
    cat_uniques.includes(elem.category) ? null : cat_uniques.push(elem.category)
  );

  return (
    <div>
      {/* Catégories */}
      <ul>
        {cat_uniques.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      {/* Plantes */}
      <ul className='lmj-plant-list'>
      {plantList.map(({ id, cover, name, water, light }) => (
        <PlantItem
          id={id}
          cover={cover}
          name={name}
          water={water}
          light={light}
        />
      ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
