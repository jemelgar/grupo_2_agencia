import React from 'react';
import image from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';
function SideBar() {
	return (
		<React.Fragment>
			{/*<!-- Sidebar -->*/}
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
				{/*<!-- Sidebar - Brand -->*/}
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon">
						<img className="w-100" src= {image} width= "10%" alt="Focus Travel" />
					</div>
				</a>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider my-0" />

				{/*<!-- Nav Item - Dashboard -->*/}
				<li className="nav-item active">
					<Link className="nav-link" to="/">
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard Administrador</span>
					</Link>
				</li>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider" />

				{/*<!-- Heading -->*/}
				<div className="sidebar-heading">Actions</div>

				{/*<!-- Generos -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/usuariosApi">
						<i className="fas fa-fw fa-users"></i>

						<span>Listado de Usuarios</span>
					</Link>
				</li>

				{/*<!-- Generos -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/productosApi">
						<i className="fas fa-fw fa-list"></i>

						<span>Listado de Productos</span>
					</Link>
				</li>

				{/*<!-- Last Movie -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/categorias">
						<i className="fas fa-fw fa-list"></i>

						<span>Categorias</span>
					</Link>
				</li>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider d-none d-md-block" />
			</ul>
			{/*<!-- End of Sidebar -->*/}
		</React.Fragment>
	);
}
export default SideBar;
