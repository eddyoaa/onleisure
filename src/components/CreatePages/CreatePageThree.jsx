import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';
import React from "react";

const CreatePageThree = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [toValueCreate, setToValueCreate] = useState(false);
    console.log(createValues);
    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(40);
      });

      const datetimeUmwandler = (datetime, createValues) => { 
        delete createValues.datetime;
        datetime = JSON.stringify(datetime);
        const array =  datetime.split("T");
        const timeArr = array[1].split(":");
        const newTime= timeArr[0] + ":" + timeArr[1];
        const newDate = array[0]
        const newObj = {date: newDate, time: newTime};
        const combinedValues = {...createValues, ...newObj};
        console.log("DATA" + combinedValues)
        return combinedValues;
    }
      return ( 
        <div className="createPages">
            {toValueCreate && <Navigate to="/create/4"/>}

         

            <Formik
            initialValues={{ 
                adress: createValues.adress || "",
                city: createValues.city || ""
            }}

            validationSchema={Yup.object({
                adress: Yup.string()
                .max(30, 'Die Adresse ist zu lang!')
                .required('Bitte angeben'),

                city: Yup.string()
                .max(15, 'Der Stadtname ist zu lang!')
                .required('Bitte angeben'),
                datetime:""
                })}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log("Create Values:" + values);
                    const cityObj = {city: values.city.toLowerCase()}
                    delete values.city;
                    const cityCombined = {...values, ...cityObj}
                    const combinedValues = {...createValues, ...cityCombined};
                    const moreCombined = datetimeUmwandler(combinedValues.datetime, combinedValues);
                    onCreateValuesChange(moreCombined);
                    setToValueCreate(true);
                    }}
            >

{({
          isSubmitting,
          getFieldProps,
          handleChange,
          handleBlur,
          values,
          setFieldValue

        }) => (
        <div className="form">
            <Form>
                <div className="abfragen2">
                    <h3 className="text-one">Wann und wo?</h3>

                    <div className="AdresseAbfragen">
                    <label htmlFor="labelAdresse">Adresse</label>
                        <Field className="standortEingabefeld" name="adress" type="text" placeholder="Gib eine Adresse ein..." />
                        <ErrorMessage name="adress" />
                    </div>

                    <div className="StadtAbfragen">
                    <label htmlFor="labelStadt">Stadt</label>
                        <Field className="standortEingabefeld" name="city" type="text" placeholder="Gib eine Stadt ein..." />
                        <ErrorMessage name="city" />
                    </div>

                
                <div className="button-wrapper">
                    <Button type="submit" version="dick" isDisabled={false}>Weiter</Button>
                </div>
                </div>
            </Form>
        </div>
        )}
            </Formik>
            
            </div>
     );}
export default CreatePageThree;




// const DatePickerField = ({ name, value, onChange }) => {
//   return (
    // <DatePicker
    // selected={(value && new Date(value)) || null}
    // onChange={val => {
    //     onChange(name, val);
    // }}/>
    
//   );
// };

// export default DatePickerField;