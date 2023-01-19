import "./StartPage.css"
import Button from "../Button/Button";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const StartPageTwo = ({search, onSearchChange, navType, onNavTypeChange}) => {
    const [toSearchCreate, setToSearchCreate] = useState(false);

    useEffect(() => {
        onNavTypeChange("startPage");
      });


        return ( 
            
            <div className="startPage">
            {toSearchCreate && <Navigate to="/searchcreate"/>}
            <Formik 
        initialValues={{ 
            city: search.city
        }}

        validationSchema={Yup.object({
            city: Yup.string()
            .max(15, 'Der Stadtname ist zu lang!')
            .required('Bitte angeben')
            })}

        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            values.city=values.city.toLowerCase();
            console.log("Search Values:" + JSON.stringify(values));
            onSearchChange(JSON.stringify(values));
            console.log(search);
            setToSearchCreate(true);
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
                    <div className="standortAbfrage">
                        <label htmlFor="city">Standort</label>
                        <Field className="standortEingabefeld" name="city" type="text" placeholder="Gib deine Stadt ein..." />
                        <ErrorMessage name="city" />
                    </div>
                <div className="buttonStart">
                <Button version="dick" isDisabled={false}>Weiter</Button>
                </div>
                </div>
            </Form>
        </div>
        )}
            </Formik>
            </div>
        );
        }
    

 
export default StartPageTwo;