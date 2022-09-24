import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { cardContext } from "./CartContext";

export default function ItemCount({ stock, initial, onAdd }) {
  const [qty, setQty] = useState(initial);
  const [mensaje, setMensaje] = useState(<></>);
  const { addToCart } = useContext(cardContext);

  const onChangeHandller = (e) => {
    let a;
    if (parseInt(e.target.value)) {
      a = parseInt(e.target.value);
    } else {
      a = 1;
    }
    setQty(a);
  };

  const add = (qty) => {
    setMensaje(() => {
      return <></>;
    });
    qty < stock
      ? setQty(qty + 1)
      : setMensaje(() => {
          return <p style={{ color: "red" }}> Stock alcanzado</p>;
        });
  };

  const rest = (qty) => {
    setMensaje(() => {
      return <></>;
    });
    qty > 0
      ? setQty(qty - 1)
      : setMensaje(() => {
          return <p style={{ color: "red" }}>Sin productos </p>;
        });
  };

  return (
    <div>
      <div className="cajaCarrito">
        <div className="productslist">
          <span>Producto Elegido</span>
          <div className="cantProducto">
            <button href="#" className="menos" onClick={() => rest(qty)}>
              -
            </button>
            <input
              className="qty"
              type="number"
              value={qty}
              onChange={onChangeHandller}
              autoFocus
            />
            <button href="#" className="mas" onClick={() => add(qty)}>
              +
            </button>
          </div>
          <button onClick={onAdd(qty)}>Agregar al carrito</button>
          <Link to={`/cart/${qty}/`}>
            <button>Finalizar Compra</button>
          </Link>
        </div>

        <p>{mensaje}</p>
      </div>
    </div>
  );
}
