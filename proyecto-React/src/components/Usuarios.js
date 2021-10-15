import React, { useEffect} from "react";

function Usuarios() {

const usuariosApi = async() =>{
    const url = 'admin/usuariosApi';
    const success = await fetch(url)
    const successJson = await success.json();
    console.log(successJson)
}
useEffect(()=> {
    console.log('inicializando!!!!');
    usuariosApi();
},[])

  return (
   
    <div >
     <h2> Soy el componente usuarios!!!! </h2>
    </div>
  )
}

export default Usuarios;
