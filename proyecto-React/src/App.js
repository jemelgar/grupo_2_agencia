import Productos from './components/Productos';
import SideBar from './components/Sidebar';
import Usuarios from './components/Usuarios';
// import NotFound from './NotFound';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import DetalleUsuarios from './components/DetalleUsuarios';
import DetalleProductos from './components/DetalleProductos';
import ContentWrapper from './components/ContentWrapper';

function App() {
	return (
		<React.Fragment>
			<div id="wrapper">
				<SideBar />
				<Switch>
					{/* <Route exact path="/" component={ContentWrapper} /> */}
					{/* <Route path="/database">
						<div id="content-wrapper" className="d-flex flex-column">
							<div id="content">
								<ContentRowMovies />
							</div>
						</div>
					</Route> */}
					{/* <Route path="/informacion" component={ContentRowMovies} /> */}
					<Route path="/" exact path="/" component={ContentWrapper} />
					<Route path="/usuariosApi" exact={true} component={Usuarios} />
					<Route path="/productosApi" exact={true} component={Productos} />
					<Route path="/usuariosApi/:id" component={DetalleUsuarios} />
					<Route path="/productosApi/:id" component={DetalleProductos} />

					{/* <Route component={NotFound} /> */}
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
