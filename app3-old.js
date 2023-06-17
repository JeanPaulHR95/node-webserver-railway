const http = require('http');
http.createServer((req, res) => {
    //req: request es la petición al server
    //res: responce es la respuesta del servidor

    //console.log(req);
    ///res.writeHead(201, {'Content-Type': 'application/json'})// recurso no encontrado
    /*
    res.setHeader('Content-Disposition', 'attachment; filename = lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id,nombre\n');
    res.write('1,Fernando\n');
    res.write('2,Mariza\n');
    res.write('3,Gladys\n'); */

    res.write('Hola mundo');
    res.end();

    //res.write('404 | page no found');///significa que como respuesta a una req será 404
    //res.end();
})
.listen(8080); //puerto por donde el servidor escuchará la petición
console.log('Escuchando en el puerto: ',8080);
