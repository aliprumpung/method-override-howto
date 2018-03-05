var express = require('express');
const swig = require('swig');
swig.setDefaults({ cache: false});

const methodOverride = require('method-override');


var app = express();
app.use(methodOverride('_method'));
app.set('view engine','html');
app.engine('html', swig.renderFile);


app.listen(3000);

const products = [
{id: 1, name: 'A'},
{id: 1, name: 'B'},
{id: 1, name: 'C'}
];

app.get('/',(req,res,next)=>{
	res.render('index', { products });
});
app.delete('/:id',(req,res,next)=>{
const id = req.params.id*1;
const product = products.filter(product => product.id === id)[0];
const index = products.indexOf(product);
products.splice(index,1);
res.redirect('/');
});




module.exports = app;