import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreatePageThree = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [toValueCreate, setToValueCreate] = useState(false);

    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(40);
      });
      return ( 
        <div className="createPages">
            {toValueCreate && <Navigate to="/create/4"/>}
            <Formik
            initialValues={{ 
                startDate: new Date(),
                adress: createValues.adress,
                city: createValues.city 
            }}

            validationSchema={Yup.object({
                adress: Yup.string()
                .max(30, 'Die Adresse ist zu lang!')
                .required('Bitte angeben'),

                city: Yup.string()
                .max(15, 'Der Stadtname ist zu lang!')
                .required('Bitte angeben'),

                date: Yup.date().required('Bitte angeben')
                })}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    
                    console.log("Create Values:" + JSON.stringify(values));
                    onCreateValuesChange(JSON.stringify(values));
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
                <div className="abfragen">
                    <h3 className="text-one">Wann und wo?</h3>

                    <div className="AdresseAbfragen">
                        
                        <Field className="standortEingabefeld" name="adress" type="text" placeholder="Gib eine Adresse ein..." />
                        <ErrorMessage name="adress" />
                    </div>

                    <div className="StadtAbfragen">
                        
                        <Field className="standortEingabefeld" name="city" type="text" placeholder="Gib eine Stadt ein..." />
                        <ErrorMessage name="city" />
                    </div>

                    <div className="DatumAbfrage">
                       
                    <DatePicker 
                      selected={values.startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="startDate"
                      onChange={date => setFieldValue('startDate', date)}
                    />
                   
                    </div>

                    <div className="ZeitAbfragen">
                    <Field className="standortEingabefeld" name="time" type="text" placeholder="z.B 18:00 - 20:00" />
                        <ErrorMessage name="time" />
                    </div>

                <div className="buttonCreate3">
                <Button version="dick" isDisabled={false}>Weiter</Button>
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