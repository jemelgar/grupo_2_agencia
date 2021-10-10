import React, { useEffect} from "react";

function Productos() {

const productosApi = async() =>{
    const url = 'admin/productosApi';
    const success = await fetch(url)
    const successJson = await success.json();
    console.log(successJson)
}
useEffect(()=> {
    console.log('inicializando!!!!');
    productosApi();
},[])

  return (
    <div className="App">
     <h2> Soy el componente Productosss!!!! </h2>
    </div>
  );
}

export default Productos;
