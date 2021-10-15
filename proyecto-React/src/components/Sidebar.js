import React from 'react';
// import image from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function SideBar() {
	return (
		<React.Fragment>
			{/*<!-- Sidebar -->*/}
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
				{/*<!-- Sidebar - Brand -->*/}
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon">
						{/* <i className="fas fa-globe-americas" /> */}

						<img className="w-100" alt="Focus Travel" />
					</div>
				</a>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider my-0" />

				{/*<!-- Nav Item - Dashboard -->*/}
				<li className="nav-item active">
					<a className="nav-link" href="/">
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard Administrador</span>
					</a>
				</li>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider" />

				{/*<!-- Heading -->*/}
				<div className="sidebar-heading">Actions</div>

				{/*<!-- Nav Item - Pages -->*/}
				<li className="nav-item">
					<a className="nav-link collapsed" href="/">
						<i className="fas fa-fw fa-folder"></i>
						<span>Listado de usuarios</span>
					</a>
				</li>

				{/*<!-- Nav Item - Charts -->*/}
				<li className="nav-item">
					<a className="nav-link" href="/">
						<i className="fas fa-fw fa-chart-area"></i>
						<span>Listado de Productos</span>
					</a>
				</li>

				{/*<!-- Nav Item - Tables -->*/}
				<li className="nav-item">
					<a className="nav-link" href="/">
						<i className="fas fa-fw fa-table"></i>
						<span>Categorias</span>
					</a>
				</li>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider d-none d-md-block" />
			</ul>
			{/*<!-- End of Sidebar -->*/}
		</React.Fragment>
	);
}
export default SideBar;
