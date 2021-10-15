import React, { useEffect } from "react";

function Productos() {
  let arrayProductos = [];

  const productosApi = async () => {
    const url = "admin/productosApi";
    const success = await fetch(url);
    arrayProductos = await success.json();
    console.log(arrayProductos);
  };
  useEffect(() => {
    console.log("inicializando!!!!");
    productosApi();
  }, []);

  return (
    <div>
      <h2> Soy el componente Productosss!!!! </h2>
      {arrayProductos.map((producto, i) => {
        return <li key = {i}>{producto}</li>;
      })}
    </div>
  );
}

export default Productos;
