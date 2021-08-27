const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');

const resolvers = require('./resolvers/index');
const typeDefs = require('./typeDefs');

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    // app.use(cors({
    //     origin: 'http://localhost:5000/'
    // }));

    await apolloServer.start();

    apolloServer.applyMiddleware({ app: app, cors: true })

    app.use((req,res)=> {
        res.send("All good!")
    })

    try {
        await mongoose.connect('mongodb+srv://app-words:app-words@cluster0.y7t1v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log('mongoose connect');
    } catch (error) {
        console.log(error);
    }

    app.listen(4000, () => console.log("SERVER START 4000 POST"))
}

startServer()