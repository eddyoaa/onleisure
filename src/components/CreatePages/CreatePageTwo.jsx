import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';
import { Description } from "@mui/icons-material";

const CreatePageTwo = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange, savedValues, onsavedValuesChange}) => {
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
                    onsavedValuesChange(savedValues.push(values));
                    console.log(savedValues)
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
                    <h3 className="text-one">Füge eine Beschreibung hinzu</h3>

                    <div className="TitelAbfragen">
                        
                        <Field className="standortEingabefeld" name="title" type="text" placeholder="Gib einen Titel ein..." />
                        <ErrorMessage name="title" />
                    </div>

                    <div className="InfoAbfrage">
                       
                        <Field className="BeschreibungEingabefeld" name="description" type="text" placeholder="Gib eine Beschreibung ein..." />
                        <ErrorMessage name="description" />
                    </div>

                <div className="buttonCreate">
                <Button version="dick" isDisabled={false}>Weiter</Button>
                </div>
                </div>
            </Form>
        </div>
        )}
            </Formik>
            </div>
     );}
 
export default CreatePageTwo;

{/* <Link to="/create/3" style={{color: "black"}}>
        <div className="button" id="create">
            <Button version="duenn" isDisabled={false}>Weiter</Button>
        </div>
        </Link>
        </div> */}