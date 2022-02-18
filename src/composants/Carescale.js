import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({ scaleValue, careType }) {
  // const {scaleValue, careType} = props
  // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
  // const scaleValue = props.scaleValue et
  // const careType = props.careType

  const range = [1, 2, 3];
  const scaleType = careType === "light" ? <img src={Sun} alt='sun-icon' /> : <img src={Water} alt='water-icon' />;

  function handleClic(e) {
    const quantityLabel = {
      1: "peu",
      2: "modérément",
      3: "beaucoup",
    };

    alert(
      `Cette plante requiert ${quantityLabel[scaleValue]} ${
        careType === "light" ? "de lumière" : "d'arrosage"
      }`
    );
  }

  return (
    <div onClick={() => handleClic()}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
