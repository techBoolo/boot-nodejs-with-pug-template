import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.DB_NAME
let db

let mongoClient = new MongoClient(mongodb_url)

const connectDB = async () => {
  if(db) return
  process.on('exit', async () => {
    if(mongoClient.topology.isConnected()) {
      await mongoClient.close()
    }
  })
  try {
    await mongoClient.connect()
    console.log('connected to db')
    db = mongoClient.db(dbName)
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

export const getDB = () => {
  return db
}

export default connectDB
