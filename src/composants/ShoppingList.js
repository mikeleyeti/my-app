import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

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

  function ShoppingList({ cart, updateCart , activeCategorie }) {
    
  
    function addToCart(name, price) {
      const currentPlantSaved = cart.find((plant) => plant.name === name)
      if (currentPlantSaved) {
        const cartFilteredCurrentPlant = cart.filter(
          (plant) => plant.name !== name
        )
        updateCart([
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantSaved.amount + 1 }
        ])
      } else {
        updateCart([...cart, { name, price, amount: 1 }])
      }
    }
  
    return (      
      <div className='lmj-shopping-list'>        
        <ul className='lmj-plant-list'>
          {plantList.filter( (plant) => (activeCategorie ? plant.category === activeCategorie : true ))
          .map(({ id, cover, name, water, light, price }) => (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ))}
        </ul>
      </div>
    )
  }
  
  export default ShoppingList
