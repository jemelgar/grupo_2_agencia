import Productos from './Productos';
import Usuarios from './Usuarios';

function ContentRowCenter() {
	return (
		<div className="row">
			<Usuarios />
			<Productos />
		</div>
	);
}

export default ContentRowCenter;
