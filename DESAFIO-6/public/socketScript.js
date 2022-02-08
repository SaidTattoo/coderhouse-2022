
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

    socket.emit('addNewProduct',data)
})
//user connection 
socket.on('disconected',(data) => {
    console.log(data)
})

//chat room 
document.getElementById('sendMessage').addEventListener('click',() => {
    const data = {
        userId : socket.id,
        username: document.getElementById('username').value,
        message : document.getElementById('chat-input').value
    }
    console.log(data)
    socket.emit('newMessage',data)
})

// renderizo los mensajes en pantalla 
socket.on('message',(data) => {
    if( data.userId === socket.id ){
        document.getElementById('chat-messages').innerHTML += `<li style="color:blue;" class="me chat__message"> <img width="20" src="public/img/${data.userId}.png" > ${data.username} - ${fullDate()} - ${data.message}</li>`
    }else {
        document.getElementById('chat-messages').innerHTML += `<li class="another chat__message"> <img width="20" src="public/img/${data.userId}.png" > ${data.username} - ${fullDate()}  - ${data.message}</li>`
    } 
})


const fullDate = () => {
    const date = new Date()
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = (date.getMonth() + 1) < 10  ? `0${date.getMonth()}` : date.getMonth() 
    const year = date.getFullYear()
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    return  `${day}/${month}/${year} ${hours}:${minutes}` 
} 