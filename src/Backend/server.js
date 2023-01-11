import express from 'express';
//import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import offer from "./models/offer.js";
import process from 'node:process';
import bodyParser from 'body-parser';


const app = express();
const port = process.env.PORT || 80;
// const uri = `mongodb+srv://LeaScal:5bFHraQUJtK0mRDW@backendprojekt.kmmdivn.mongodb.net/?retryWrites=true&w=majority`;
const uri = 'mongodb+srv://OnLeisureTeam:thisisasecret@onleisure.vxla4xe.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', true); 

const connectToDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("db started")

    } catch(error) {
        console.log(error.message);
    }
}

connectToDB()
app.use(express.json());

//Endpoints Offer
app.get('/search', async (req, res) => { 
    const searchValues = req.body;

    try
    {
        const results = await offer.find({});
        console.log(results);
        return res.status(200).send(results);
    } catch (error)
    {
        res.status(500).send(error.message);
    }   
  });

  app.get('/search', async (req, res) => { 
    try
    {
        const adress = req.body.adress;
        const city = req.body.city;
        const age = [req.body.age];
        const location_Inside = req.body.location_Inside;
        const location_Outside = req.body.location_Outside;
        const results = await offer.find({
                                        adress: adress, city: city, age: age,
                                        location_Inside: location_Inside,
                                        location_Outside: location_Outside
                                        });
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
        const results = await offer.findById(id);
        console.log(results);
        return res.status(200).send(results);
    } catch (error)
    {
        res.status(500).send(error.message);
    }
    });
  
app.post('/create', async (req, res) => {
    try 
    {
        const offer = new offer( req.body )
        await offer.save()
        res.status(200).send(offer)
    } catch(error) 
    {
        res.status(500).send(error.message);
    }
  })

  app.patch('/offer', async (req, res) => { 
    try
    {
        await offer.findByIdAndUpdate(req.body,req.body,{runValidators: true});
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
        const results = await offer.deleteOne({ _id: id });
        console.log(results);
        res.status(200).send("OK");
    } 
    catch(error) 
    {
    res.status(500).send(error.message);
    }
    })

    app.listen(80, function() {
        console.log('listening on 80');
      });
