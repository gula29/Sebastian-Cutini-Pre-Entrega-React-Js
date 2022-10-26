import React from "react";
import "./ItemCount.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductoById } from "../../Products/Products";

function ItemCount() {
  const { idProducto } = useParams();

  const [productos, setProductos] = useState({});

  useEffect(() => {
    setProductos(getProductoById(idProducto));
  }, []);

  const [contador, setContador] = useState(0);
  const restar = () => {
    setContador(contador - 1);
  };
  const agregar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <div className="contador">
        <button disabled={contador === 0 ? true : false} onClick={restar}>
          -
        </button>
        <h3>{contador}</h3>
        <button
          disabled={contador === productos.stock ? true : false}
          onClick={agregar}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
