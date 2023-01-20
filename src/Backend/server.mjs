
import express from 'express';
//import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import Offer from "./models/offer.mjs";
import process from 'node:process';
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
const port = process.env.PORT || 80;
// stating local db:
// "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="c:\data\db"
// const uri = `mongodb+srv://LeaScal:5bFHraQUJtK0mRDW@backendprojekt.kmmdivn.mongodb.net/?retryWrites=true&w=majority`;
const uri = process.env.ATLAS_APIKEY;
 
//process.env.ATLAS_APIKEY;

app.use(cors({ origin: "*"}));
// app.use(bodyParser.json({
//     type: function() {
//       return true;
//     },
//   }));

app.maxHeaderSize = 1024* 1024* 50;

  app.use(bodyParser.json({limit: '150mb',  extended: true, type: function() {
    return true;
  }}));
  app.use(bodyParser.urlencoded({limit: '150mb', extended: true, parameterLimit: 50000}));

//   var jsonParser       = express.json({limit:1024*1024*20, type:'application/json'});
//   var urlencodedParser = express.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' })

//   app.use(jsonParser);
//   app.use(urlencodedParser);

mongoose.set('strictQuery', true); 

const connectToDB = () => {
    try {
         mongoose
         .connect(uri)
         .then(() => {
            console.log("Conected to Mongos")
         });
        console.log("db started")

    } catch(error) {
        console.log(error.message);
    }
}

connectToDB()
// app.use(express.json());

//Endpoints Offer
app.get('/offers', async (req, res) => { 
    try
    {
        const results = await Offer.find({});
        console.log(results);
         res.status(200).send(results);
    } catch (error)
    {
        res.status(500).send(error.message);
    }   
  });

  app.post('/search', async (req, res) => { 
    let query = {};
    if (req.body.city){
        query = { ...query, city: req.body.city};
    }
    if(req.body.age){
        query = { ...query, age: req.body.age};
    }
    if(req.body.location_Inside){
        query = { ...query, location_Inside: req.body.location_Inside};
    }
    if(req.body.location_Outside){
        query = { ...query, location_Outside: req.body.location_Outside};
    }
    if(req.body.activity){
        query = { ...query, activity: req.body.activity};
    }

    console.log(query);
    try
    {
        const results = await Offer.find(query);
        console.log(results);
        return res.status(200).send(results);
    } catch (error)
    {
        res.status(500).send(error.message);
    }   
  });
  

app.get('/offer/:id', async (req, res) => {
    try
    {
        const id = req.params.id;
        const results = await Offer.findById(id);
        console.log(results);
        return res.status(200).send(results);
    } catch (error)
    {
        res.status(500).send(error.message);
    }
    });
  
app.post('/create', async (req, res) => {
    console.log(req)

    // if(req.file.size > 10000000){
    //     return res.status(413).json({error: "File size too large"})
    // }

    try 
    {
         const data = new Offer(req.body)
         await data.save()

        res.status(200).send(data)
    } catch(error) 
    {
        res.status(500).send({message: error.message});
    }
  })

  app.patch('/offer', async (req, res) => { 
    try
    {
        await Offer.findByIdAndUpdate(req.body,req.body,{runValidators: true});
        res.status(200).send("OK");
    } 
    catch(error) 
    {
    res.status(500).send(error.message);
    }
    })

app.delete('/offer/:id', async (req, res) => { 
    try
    {
        const id = req.params.id;
        const results = await Offer.deleteOne({ _id: id });
        console.log(results);
        res.status(200).send("OK");
    } 
    catch(error) 
    {
    res.status(500).send(error.message);
    }
    })

    app.listen(port, function() {
        console.log('listening on', port);
      });
