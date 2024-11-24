import { MongoClient } from "mongodb";

export default async function connectToDatabase(uriString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uriString);
        console.log('Connecting to database cluster');
        await mongoClient.connect();
        console.log('Connected successfully to the database');

        return mongoClient;
    }
    catch(erro) {
        console.error('Fail to connect to the database', erro);
        process.exit();
    }
}