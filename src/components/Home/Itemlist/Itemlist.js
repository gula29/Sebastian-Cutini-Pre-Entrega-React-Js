import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../../Products/Products";
import Item from "../cards/Item";
import "./ItemList.css";

function Itemlist() {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  const getCard = () => {
    setTimeout(() => {
      const productos = Products;
      setProductos(productos);
    }, 2000);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="principal_container">
      <div className="cardItem">
        {categoria
          ? productos
              .filter((fabricacion) => fabricacion.categoria === categoria)
              .map((Products, i) => (
                <Item
                  key={i}
                  id={i}
                  descripcion={Products.descripcion}
                  imagen={Products.imagen}
                  precio={Products.precio}
                  categoria={Products.categoria}
                />
              ))
          : productos.map((Products, i) => (
              <Item
                key={i}
                id={i}
                descripcion={Products.descripcion}
                imagen={Products.imagen}
                precio={Products.precio}
                categoria={Products.categoria}
              />
            ))}
      </div>
    </div>
  );
}

export default Itemlist;
