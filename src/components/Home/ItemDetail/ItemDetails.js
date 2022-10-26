import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductoById } from "../../Products/Products";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetails.css";

const Itemdetails = () => {
  const { idProducto } = useParams();

  const [productos, setProductos] = useState({});

  useEffect(() => {
    setProductos(getProductoById(idProducto));
  }, []);

  return (
    <div className="pageDetalle">
      <div>
        <img
          className="cardImgDet"
          src={productos.imagen}
          alt={productos.descripcion}
        />
      </div>
      <div className="detalles">
        <h3>{productos.descripcion}</h3>
        <h3>${productos.precio}</h3>
        <h5>Stock = {productos.stock} unidades</h5>
        <ItemCount />
      </div>
    </div>
  );
};

export default Itemdetails;
