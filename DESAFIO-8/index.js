
let products = [
    {
        stock:5, 
        name: 'Producto 1',
        price: 100,
        description: 'Descripcion del producto 1',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 2',
        price: 200,
        description: 'Descripcion del producto 2',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 3',
        price: 300,
        description: 'Descripcion del producto 3',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 4',
        price: 400,
        description: 'Descripcion del producto 4',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 5',
        price: 500,
        description: 'Descripcion del producto 5',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 6',
        price: 600,
        description: 'Descripcion del producto 6',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 7',
        price: 700,
        description: 'Descripcion del producto 7',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 8',
        price: 800,
        description: 'Descripcion del producto 8',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 9',
        price: 900,
        description: 'Descripcion del producto 9',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    },
    {
        stock:5,
        name: 'Producto 10',
        price: 1000,
        description: 'Descripcion del producto 10',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
    }
];

/**
 * create arr with 10 messages with  usermane, message and date
 * 
 */
const messages = [
    {
        userName: 'Juan',
        message: 'Hola',
        date: '2020-06-01',
    },
    {
        userName: 'Pedro',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Juan',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Pedro',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Juan',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Pedro',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Juan',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Pedro',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Juan',
        message: 'Hola',
        date: '2020-06-01'
    },
    {
        userName: 'Pedro',
        message: 'Hola',
        date: '2020-06-01'
    }
];






db.messages.insertMany(messages)
db.products.insertMany(products)


/*
 list all products and messages
*/
db.products.find().pretty();
db.messages.find().pretty();

/**
 * search quantity of products and messages
 */
db.products.find().count();
db.messages.find().count();

/**
 * create crud for products
 * add product in products
*/
db.products.insertOne({
    name: 'Producto 11',
    price: 1100,
    description: 'Descripcion del producto 11',
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790873524098984%2F&psig=AOvVaw2_Z_Q-_X_Q_z_Z-_Q_Q_Q&ust=1589788240870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_3-gCFQAAAAAdAAAAABAD'
});

/**
 * 
 * find by specific name of product 
*/
db.products.find({name: 'Producto 1'});

/**
 * list all products where price < 1000
*/
db.products.find({price: {$lt: 1000}});
/**
 * list all products price between 1000 and 3000
*/
db.products.find({price: {$gt: 1000, $lt: 3000}});
/**
 * list all products price > 3000
 */
db.products.find({price: {$gt: 3000}});
/*
* find the name of  the third lowest product
*/

/**
 * update all stock to 0 of the products price < 4000
 */
db.products.updateMany({price: {$lt: 4000}}, {$set: {stock: 0}});

/**
 * 
 * delete all products where price < 1000
 */
db.products.deleteMany({price: {$lt: 1000}});














