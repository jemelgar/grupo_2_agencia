const {validationResult }= require('express-validator')
const User = require('../models/Users');
const bcryptjs = require('bcryptjs');

const controladorLogin = {
	login: (req, res) => {
		res.render('login');
	},
	loginProcess:(req, res) => {
    let userToLogin = User.findByField('email', req.body.email)

		if(userToLogin){
			let comparePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if(comparePassword)  {
				delete userToLogin.password;
				req.session.userLogged = userToLogin

				if(req.body.remember_user){
					res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
				}
				return res.redirect('/login/profile')
			}
			return res.render('login', {
		     	errors:{
					email: {
						msg: 'Las credenciales son inválidas'
					}
			   	}
			})
		}
		
		return res.render('login', {
			errors:{
			email: {
				msg: 'El email no se encuentra registrado'
			}
		}
		}) 
	},
	profile: (req, res) => {
		console.log(req.cookies.userEmail)
		console.log(req.session.userLogged)
		return res.render('profile', {
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
