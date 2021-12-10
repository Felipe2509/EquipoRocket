const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require('apollo-server-express')
const {resolvers} = require('./resolvers/index')
const {types} = require('./types/index')


const app = express()
const server = new ApolloServer({
    typeDefs: types,
    resolvers:resolvers
})

mongoose.connect('mongodb+srv://admin:admin@equipo-rocket.ow2cf.mongodb.net/test', async() => {
    console.log('Conexion a base de datos exitosa');
    app.listen(5010, async()=>{
        await server.start()
        server.applyMiddleware({app})
        console.log("servidor inicializado en puerto 5010");
    })
})

//mongodb+srv://admin:admin@equipo-rocket.ow2cf.mongodb.net/equipo-rocket-db