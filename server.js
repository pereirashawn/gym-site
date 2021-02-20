
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient


const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const ConnectDB = async (operations,res) => {

  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true })
        const db = client.db('gym-site-db')

        await operations(db)

        client.close()
    }
    catch(error) {
        res.status(500).json({message : `Error connecting to server : ${error}`})
    }
  }

app.post('/api/signup' , (req,res) => {
  
    ConnectDB(async(db) => {

      const newUser = req.body

      const insert = await db.collection('gym-users').insertOne(newUser)

      res.status(200).json({message : `SUCCESSFULL`})

    },res)
})

app.listen(port, () => console.log(`Listening on port ${port}`));
