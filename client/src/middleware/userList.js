const MongoClient = require('mongodb').MongoClient

async function userList () {

    try{
            const client = await MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true })
            const db = client.db('gym-site-db')
            const users = db.collection('gym-users')
            const dup =await users.find({},{email:1}).toArray()

            console.log(dup)
            return dup;
      }
      catch(err){
        console.log(err)
      }
    
}

export {userList}