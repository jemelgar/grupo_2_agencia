import React, { useEffect } from "react";

function Productos() {
  let arrayUsuarios = [];

  const productosApi = async () => {
    const url = "admin/productosApi";
    const success = await fetch(url);
    arrayUsuarios = await success.json();
    console.log(arrayUsuarios);
  };
  useEffect(() => {
    console.log("inicializando!!!!");
    productosApi();
  }, []);

  return (
    <div>
      <h2> Soy el componente Productosss!!!! </h2>
      {arrayUsuarios.map((usuario, i) => {
        return <li key = {i}>{usuario}</li>;
      })}
    </div>
  );
}

export default Productos;
