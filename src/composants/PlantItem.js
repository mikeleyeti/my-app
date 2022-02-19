import CareScale from './Carescale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={id} className='lmj-plant-item'  
		// onClick={() => handleClick(name) }
		>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{/* <span className='lmj-plant-item-price'>{price}€</span>			 */}
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default PlantItem
