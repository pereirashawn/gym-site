const enc = require('./encdec');
const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt')
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
        const users = db.collection('gym-users')

        await operations(db)

        client.close()
    }
    catch(error) {
        res.status(500).json({message : `Error connecting to server : ${error}`})
    }
  }


  app.post('/api/signup' , (req,res) => {
  
    ConnectDB(async(db) => {

      const users = db.collection('gym-users')

      let newUser = req.body;
      let duplicate = 0;

      newUser.password = enc.encrypt_password(newUser.password);

      try{
        let dup = await users.findOne({email : newUser.email})
        //dup = JSON.stringify(dup)
        console.log(`returned email now : ${dup.email}`)

        if(dup.email){
          duplicate = 1
        }

      }
      catch(err){
        console.log(`ERR - ${err}`)
      }

      console.log(`duplicate : ${duplicate}`)
     
      if(duplicate === 0){

        try{
          const insert = await db.collection('gym-users').insertOne(newUser)
          console.log('1')

          return res.status(200).json({message : `User registered successfully`})
        }
        catch(err){
          console.log('2')
          //return res.sendStatus(500).json({message : `An error occured`})
        }
          
      }
      
      console.log('3')
      res.status(500).json({message : `A user with that email ID already exists. Please use a different email.`})  

    },res)
});
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
