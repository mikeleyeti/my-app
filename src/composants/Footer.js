import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState();

  function handleBlur(e) {
    return !inputValue.includes('@') ? alert("Attention, votre adresse ne contient pas le symbole @") : null
  }

//   function handleClavier(e) {
//     if(e.key === 'Enter'){
//         alert('enter press here! ')
//       }
//   }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
      Laissez-nous votre mail : 
      <input
      placeholder="Entrez votre mail" 
      value={inputValue}       
      onChange={(e)=> setInputValue(e.target.value)}
      onBlur={(e) => handleBlur(e)}
    //   onKeyPress={(e) => handleClavier(e)} 
    />
      </div>
    </footer>
  );
}

export default Footer;
