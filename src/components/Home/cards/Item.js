
import {Link} from "react-router-dom"
import "./Item.css";


const Item = ({descripcion , categoria , precio , imagen ,id}) => {
  return (
    <div className="cardItem">
     <Link to={`ItemDetail/${id}`}>
        <div className="card" >
          <img className="cardImg" src={imagen} alt={descripcion} />
          <div className="cardProps">
            <h3>{descripcion}</h3>
             <h5>{categoria.toUpperCase()}</h5>
           
          </div>
        </div>
        </Link>
    </div>
  );      
}

export default Item  ;
