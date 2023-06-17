const express = require('express')
const hbs=require('hbs');
require('dotenv').config();
const app3 = express()
const port = process.env.PORT;
//handerlebar:
app3.set('view engine', 'hbs');//para usar el handlebars para express
hbs.registerPartials(__dirname+'/views/partials');//para usar parciales
//para servir contenido estático
app3.use(express.static('public')); // definición de midelware. si public está en otro sitio especificar path

app3.get('/',(req, res)=>{
    res.render('home',{//son los argumentos
        nombre: ' Jean Paul',
        titulo: 'Curso Node, Cero a Experto'
    });
})
app3.get('/elements', (req, res)=>{
    res.render('elements',{//son los argumentos
        nombre: ' Jean Paul',
        titulo: 'Curso Node, Cero a Experto'
    });
})

app3.get('/generic', (req, res)=>{
    res.render('generic',{//son los argumentos
        nombre: ' Jean Paul',
        titulo: 'Curso Node, Cero a Experto'
    });
})

app3.get('*', (req, res)=>{
    res.sendFile(__dirname+'/public/404.html');
})
app3.listen(port, () =>{
    console.log(`Example app listening al http://localhost:${port}`)
})