import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';
import React from "react";
import { LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DatePickerField from "./DatePickerField";

const CreatePageThree = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [toValueCreate, setToValueCreate] = useState(false);
    console.log(createValues);
    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(40);
      });

      return ( 
        <div className="createPages">
            {toValueCreate && <Navigate to="/create/4"/>}

            <LocalizationProvider dateAdapter={AdapterDateFns}>

            <Formik
            initialValues={{ 
                adress: createValues.adress,
                city: createValues.city,
                datetime: ""
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
                    const combinedValues = {...createValues, ...values};
                    onCreateValuesChange(JSON.stringify(combinedValues));
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
                        <Field  
                            component={DatePickerField}
                            className="datetimepicker"
                            name="datetime"
                            label="Start Zeit"
                            />
                    </div>
                <div className="button-wrapper">
                    <Button type="submit" version="dick" isDisabled={false}>Weiter</Button>
                </div>
                </div>
            </Form>
        </div>
        )}
            </Formik>
            </LocalizationProvider>
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