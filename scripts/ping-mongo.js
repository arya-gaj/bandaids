const { MongoClient, ServerApiVersion } = require('mongodb')

const uri =
  process.env.MONGODB_URI ||
  'mongodb+srv://aryagaj_db_user:skdFpqHMiYt6zMOw@cluster0.otmth1w.mongodb.net/?appName=Cluster0'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    await client.close()
  }
}

run().catch((err) => {
  console.error('MongoDB ping failed:', err)
  process.exitCode = 1
})


