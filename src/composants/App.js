import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import Categories from './Categories'

function App() {
	const [cart, updateCart] = useState([])
	const [activeCategorie, updateActiveCategorie] = useState('')
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<Categories activeCategorie={activeCategorie} updateActiveCategorie = {updateActiveCategorie} />
				<ShoppingList cart={cart} updateCart={updateCart}  activeCategorie={activeCategorie}/>
			</div>
			<Footer />
		</div>
	)
}

export default App