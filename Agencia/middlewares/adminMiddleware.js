function guestMiddleware(req, res, next) {
  if (req.session.userLogged.tipoUsuario != "Administrador") {
    console.log("Acceso denegado");
    return res.redirect("/");
  }

  next();
}

module.exports = guestMiddleware;
