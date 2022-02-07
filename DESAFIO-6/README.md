## NODE Y SOCKET.IO

Primero se debe crear la carpeta public donde estara el archivo script por el lado del cliente, y se enlaza  con la etiqueta ```<script ></script>``` 

![Texto alternativo](imagenesCode\main.hbs.png "Título alternativo")

y por el lado del servidos 

por el lado del server se deben hacer unas modificaciones 

```javascript 
    const express = require('express');
    const app = express();
    const server = require('http').Server(app);
    const io = require('socket.io')(server);
    const PORT = 8080
    app.use('/public', express.static('public'))

    //se reemplaza el app 
    app.listen(PORT)
    //por el server
    server.listen(PORT)

```

para compartir data entre el server y el cliente 

