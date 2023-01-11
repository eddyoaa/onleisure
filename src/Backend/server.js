import express from 'express';
//import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import Offer from "./models/offer.js";
import process from 'node:process';

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
app.get('/offers', async (req, res) => { 
    try
    {
        const results = await Offer.find({});
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
  
app.post('/OfferCreate', async (req, res) => {
    try 
    {
        const offer = new Offer( req.body )
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

