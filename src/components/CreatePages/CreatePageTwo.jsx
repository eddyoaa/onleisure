import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';

const CreatePageTwo = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [toValueCreate, setToValueCreate] = useState(false);

  console.log("hierrr"+createValues);

    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(20);
      });

    return ( 
        <div className="createPages">
            {toValueCreate && <Navigate to="/create/3"/>}
            <Formik
            initialValues={{ 
                title: createValues.title,
                description: createValues.description 
            }}

            validationSchema={Yup.object({
                title: Yup.string()
                .max(30, 'Der Titel ist zu lang!')
                .required('Bitte angeben'),

                description: Yup.string()
                .max(400, 'Die Beschreibung ist zu lang!')
                .required('Bitte angeben')
                })}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log("Create Values:" + JSON.stringify(values));
                    const combinedValues = {...createValues, ...values};
                    onCreateValuesChange(combinedValues);
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
                    <h3 className="text-one">Füge eine Beschreibung hinzu</h3>

                    <div className="TitelAbfragen">
                    <label htmlFor="titelLabel">Titel</label>
                        <Field className="standortEingabefeld" name="title" type="text" placeholder="Gib einen Titel ein..." />
                        <ErrorMessage name="title" />
                    </div>

                    <div className="InfoAbfrage">
                    <label htmlFor="beschreibungLabel">Beschreibung</label>
                        <Field className="BeschreibungEingabefeld" name="description" type="text" placeholder="Gib eine Beschreibung ein..." />
                        <ErrorMessage name="description" />
                    </div>
                </div>

                <div className="buttonCreate2">
                <Button version="dick" isDisabled={false}>Weiter</Button>
                </div>
                
            </Form>
        </div>
        )}
            </Formik>
            </div>
     );}
 
export default CreatePageTwo;