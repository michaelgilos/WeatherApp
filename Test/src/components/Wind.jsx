import { FaWind } from "react-icons/fa";

const Wind = ( {speed} ) => {
  return (
    <h2><FaWind /> Wind Speed: <span style={{color: "red"}}>{speed} KM/H</span></h2>
  )
}

export default Wind