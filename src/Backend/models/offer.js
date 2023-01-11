import mongoose from 'mongoose';
import Validator from 'validator';

const { Schema } = mongoose;
const validator = Validator;

const OfferSchema = new Schema({

    title:  {  type: String,
        required: true },

    discription:  {  type: String,
        required: true
    },
   
    image:  {  type: Image,
        required: true
    },
    adress:  {  type: String,
            required: true
        },
           
    date :    {  type: String,
            required: true,
            validate: {
                validator: time => validator.isDate(time),
                message: 'time is not valid.'
              }
         }, 

         time :    {  type: String,
            required: true,
            validate: {
                validator: time => validator.isDate(time),
                message: 'time is not valid.'
              }
         }, 

    age:  {  type: Number,
            required: true,
            min: 0,
            max: 120
        },    
    
    location_Outside: {
                type: Boolean,
                required: true
    },
    location_Inside: {
        type: Boolean,
        required: true
},
    eMail: {  type: String,
            required: true,
            validate: {
                validator: email => validator.isEmail(email),
                message: 'eMail is not valid.'
              }},

    telefon:  {
                type: String,
                validate: {
                    validator: num => validator.isMobilePhone(num),
                    message: 'Phonenumber is not valid.'
                  }
              },
    activity:  {  type: String,
                required: true },
});



const Offer = mongoose.model('Offer', OfferSchema)
export default Offer;
