function adminMiddleware(req, res, next) {
	if (req.session.userLogged.id_tipo_usuario != 1) {
		console.log('Acceso denegado');
		return res.redirect('/');
	}

	next();
}

module.exports = adminMiddleware;
