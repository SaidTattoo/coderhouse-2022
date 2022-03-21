const { query } = require('express');
const admin = require('firebase-admin');
const { firebaseConfig } = require('../config');
const { getFirestore } = require('firebase-admin/firestore')

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: "https://crud-test-44235.firebaseio.com"
});

class ContenedorFirebase {

    constructor(collection){
        this.db = getFirestore().collection(collection)  
    }
    async getAll(){
        const doc = await this.db.get()
        let docs = doc.docs
        const items = docs.map(doc => ({
            id:doc.id,
           ...doc.data()
        }))
        return items
    }
    async getById(id){
        const doc = await this.db.doc(id).get()
        return {
            id: doc.id,
            ...doc.data()
        }
    }
    async save(producto){
        const { id } = await this.db.add({
            ...producto,
            timestamp: Date.now()
          })
          return id
    }
    async delete(id){
        await this.db.doc(id).delete()
    }
    async update(id,data){
        const item = await this.db.doc(id).get()
        if(item.exists){
            await this.db.doc(id).update(data)
        }   
    }
    async deleteAll(){
        const query = await this.db.get()
        const docs = query.docs
        docs.forEach(doc => doc.ref.delete())
    }
} 
module.exports = ContenedorFirebase;