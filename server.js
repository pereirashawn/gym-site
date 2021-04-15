const enc = require('./encdec');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient




const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const ConnectDB = async (operations,res) => {

  try {
    const client = await MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true })
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

      let newUser = req.body

      //console.log(req.body);
      newUser.password = enc.encrypt_password(newUser.password);

      const insert = await db.collection('gym-users').insertOne(newUser)

      res.status(200).json({message : `SUCCESSFULL`})

    },res)
})
  /* 
app.post('/api/signup' , (req,res) => {
  
    ConnectDB(async(db) => {

      const newUser = req.body

      const insert = await db.collection('gym-users').insertOne(newUser)

      res.status(200).json({message : `SUCCESSFULL`})

    },res)
})
*/


app.post('/api/login' , (req,res) => {

  ConnectDB(async(db) => {

    const email = req.body.email;
    const password = req.body.password;

    const auth = await db.collection('gym-users').findOne({email : email})

    //console.log(auth.email)

    let decoded_password = enc.decrypt_password(auth.password)

    if(auth.email === email && decoded_password === password)
    {
      res.status(200).json({message : `Login Successfull`})
    }
    else {
      res.status(200).json({message : `Invalid Credentials`})
    }

    

  },res)
})


/*
app.post('/api/login' , (req,res) => {

  ConnectDB(async(db) => {

    const email = req.body.email;
    const password = req.body.password;

    const auth = await db.collection('gym-users').findOne({email : email})

    console.log(auth.email)

    if(auth.email === email && auth.password === password)
    {
      res.status(200).json({message : `Login Successfull`})
    }
    else {
      res.status(200).json({message : `Invalid Credentials`})
    }

    

  },res)
      
})
*/

app.listen(port, () => console.log(`Listening on port ${port}`));
