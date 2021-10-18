import React, { useEffect, useState } from "react";

// import PropTypes from 'prop-types';

function SmallCard() {
  const [usuarios, setUsuarios] = useState([]);
  const usuariosApi = async () => {
    const url = "http://192.168.1.37:3001/admin/usuariosApi";
    const success = await fetch(url);
    console.log(success);
    const successJson = await success.json();
    console.log("%c Usuarios", "color:yellow", successJson);
    setUsuarios(successJson.meta);
  };

  const [productos, setProductos] = useState([]);

  const productosApi = async () => {
    const url = "http://192.168.1.37:3001/admin/productosApi";
    const success = await fetch(url);
    const successJson = await success.json();
    console.log("%c Productos", "color:orange", successJson);

    setProductos(successJson.meta);
  };

  useEffect(() => {
    usuariosApi();
    productosApi();
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        {/* Color Borde */}
        <div className="card border-left-primary shadow h-100 py-2">
          {/* Inicio de la card */}
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                {/* Título */}
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Total de Usuarios{" "}
                </div>
                {/* Cifra */}
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {usuarios.total}
                </div>
              </div>
              <div className="col-auto">
                {/* Icono */}
                <i className="fas fa-users fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  {" "}
                  Total de productos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {productos.total}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-check fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-4 mb-4">
				<div className="card border-left-warning shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Tipos de destino</div>

								<div className="h5 mb-0 font-weight-bold text-gray-800">No se ha resuelto</div>
							</div>
							<div className="col-auto">
								<i className="fas fa-user fa-2x text-gray-300"></i>
							</div>
						</div>
					</div>
				</div>
			</div> */}
    </div>
  );
}

export default SmallCard;
