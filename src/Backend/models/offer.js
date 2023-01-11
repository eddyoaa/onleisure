import mongoose from 'mongoose';
import Validator from 'validator';

const { Schema } = mongoose;
const validator = Validator;

const timeRegex = new RegExp(/^(10|11|12|[1-9]):[0-5][0-9]$/);


const OfferSchema = new Schema({

    title:  {  type: String,
        required: true },

    discription:  {  type: String,
        required: true
    },
   
    // Image:  {  type: Image,
    //     required: true
    // },
    adress:  {  type: String,
            required: true
        },


    city:  {  type: String,
            required: true
        },
           
    date :    {  type: String,
            required: true,
            validate: {
                validator: date => validator.isDate(date),
                message: 'date is not valid.'
              }
         }, 

         time :    {  type: String,
            required: true
         }, 

    age:  {  type: Array,
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
