const express = require('express');
const path = require('path');
const app = express();
const destinodata = require('./database/data.json');
const port = 3000;

// Rutas
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const productDetailRouter = require('./routes/productDetail');
const productCarRouter = require('./routes/productCart');
const registerRouter = require('./routes/register');
const signupRouter = require('./routes/signup');
const adminRouter = require('./routes/admin');

app.use(express.static('public'));

app.listen(process.env.PORT || port, () =>
	console.log(`Servidor corriendo en puerto ${port}`)
);

app.set('view engine', 'ejs');
/*Ruteo */
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/productCart', productCarRouter);
app.use('/productDetail', productDetailRouter);
app.use('/register', registerRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminRouter);


/* SOCIAL Y ERROR */

app.get('/fb', (req, res) => {
	res.redirect('https://www.facebook.com');
});
app.get('/ins', (req, res) => {
	res.redirect('https://www.instagram.com/');
});
app.get('/twi', (req, res) => {
	res.redirect('https://twitter.com/home');
});
app.get('/you', (req, res) => {
	res.redirect('https://www.youtube.com/');
});
app.get('*', (req, res) => {
	res.render('error');
});
