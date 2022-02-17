import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
  return (
    <div className="lmj-banner">
    <img src={logo} alt='La maison jungle' className='lmj-logo' ></img>
      <h1>La maison jungle</h1>
    </div>
  );
}

export default Banner;
