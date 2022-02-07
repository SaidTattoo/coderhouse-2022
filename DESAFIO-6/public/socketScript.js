
const socket = io.connect('http://localhost:8080');

//se realiza el template con los datos obtenidos del servidor
const templateTable = Handlebars.compile(`
    <table class="table table-striped">
        <thead>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Foto</th>
        </thead>
        <tbody>
            {{#each productos}}
                <tr>
                    <td>{{this.title}}</td>
                    <td>{{this.price}}</td>
                    <td><img src="{{this.thumbnail}}" width="100px" height="100px"></td>
                </tr>
            {{/each}}
        </tbody>
    </table>
`)

socket.on('productos',(data) => {
    document.getElementById('productos').innerHTML = templateTable({productos : data})
})

document.getElementById('addList').addEventListener('click',() => {
    const data = {
        title : document.getElementById('title').value,
        price : document.getElementById('price').value,
        thumbnail : document.getElementById('thumbnail').value
    }
    console.log(data)
    socket.emit('addNewProduct',data)
})