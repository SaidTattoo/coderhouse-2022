const  Contenedor =  require('./Contenedor')
const p = new Contenedor([])

//guardar producto
p.save({
    'title':"said",
    "price":100,
    "thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
})
//buscar elemento por id
console.log(p.getById(1641936295804))
//eliminar elemento por id
p.deleteById(1641933911054)
//traer todo
console.log(p.getAll())
//eliminar todos los elementos
p.deleteAll()