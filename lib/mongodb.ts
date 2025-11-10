import { MongoClient, MongoClientOptions } from 'mongodb'

const fallbackUri =
  'mongodb+srv://aryagaj_db_user:skdFpqHMiYt6zMOw@cluster0.otmth1w.mongodb.net/?appName=Cluster0'

const uri = process.env.MONGODB_URI || fallbackUri

const options: MongoClientOptions = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise

