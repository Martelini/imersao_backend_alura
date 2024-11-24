import 'dotenv/config';
import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js";

const DB_NAME = process.env.DATABASE_NAME
const URI = process.env.MONGODB_URL

const connection = await connectToDatabase(URI)

export async function getAllPosts() {
    const db = connection.db(DB_NAME);
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = connection.db(DB_NAME);
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = connection.db(DB_NAME);
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}