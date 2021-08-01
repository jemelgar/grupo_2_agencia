const {validationResult }= require('express-validator')
const User = require('../models/Users');
// requerir e instalar bcyptsjs

const controladorLogin = {
	login: (req, res) => {
		res.render('login');
	},
	loginProcess:(req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0){
			return res.render('login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		const body = req.body 

		let userToLogin = User.findByField('email', req.body.email)
		if(userToLogin){
			delete userToLogin.password;
			req.session.userLogged = userToLogin

			if(req.body.remember_user){
				res.cookie('userEmail', req.body.email,{maxAge: (1000 * 60) * 2})
			}

			return res.redirect('/login/profile')

		}

		/* 
		CODIGO CON BCRYPTJS

		if(userToLogin){
			let comparePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if(comparePassword) {
				return res.send( contraseña comparada correctamente)
			}
			return res.render('login', {errors:{
			password: {
				msg: 'Las credenciales son inválidas'
			}
		}
		})
		}
		*/

		return res.render('login', {errors:{
			password: {
				msg: 'Las credenciales son inválidas'
			}
		}
		})
	},
	profile: (req, res) => {

		console.log(req.cookies.userEmail)

		res.render('profile', {
			user: req.session.userLogged
		});	
	},
	
	logout: (req, res) => {
		req.session.destroy();
		console.log(req.session)
		return res.redirect('/')
	}

};
module.exports = controladorLogin;
