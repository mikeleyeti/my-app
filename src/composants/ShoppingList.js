import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css"
import CareScale from "./Carescale";

function ShoppingList() {
  const categories = ["test1", "test2", "test3", "test1"];

  // Méthode 1 "bourin"
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
      <ul >
        {cat_uniques.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      {/* Plantes */}
      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
            <li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
					</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
