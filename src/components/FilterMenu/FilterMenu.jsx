import {React, useEffect, useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Switch } from '@mui/material';
import Button from "../Button/Button";
import "./FilterMenu.css";
import { redirect } from 'react-router-dom';

const FilterMenu = ({navType, onNavTypeChange, search, onSearhChange}) => {
    const [toContent, setToContent] = useState(false);

    useEffect(() => {
        onNavTypeChange("contentPage");
      });

   // {toContent ? redirect("/content"): null}
    
    return (
        <>
      <Formik 
        initialValues={{ 
            standort: '', 
            kategorie: "", 
            alter: "", 
            drinnen: "false", 
            draussen: "false"}}

        validationSchema={Yup.object({
            standort: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            alter: Yup.string()
            .max(2, 'Must be 2 characters or less'),
            })}

        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log(JSON.stringify(values));
            onSearhChange(values);
            setToContent(true);
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
                        <label htmlFor="standort">Standort</label>
                        <Field className="standortEingabefeld" name="standort" type="text" placeholder="Gib deine Stadt ein..." />
                        <ErrorMessage name="standort" />
                    </div>
                    
                    <div className="kategorieAbfrage">
                        <label htmlFor="kategorie">Aktivität</label>
                        <Field className="kategorieEingabefeld" name="kategorie" as="select" placeholder="Wähle eine Kategrie aus...">
                            <option disabled value="">Wähle eine Aktivität...</option>
                            <option>Fußball</option>
                            <option>Teetreff</option>
                            <option>Brettspiele</option>
                            <option>Tupperparty</option>
                        </Field>

                        <ErrorMessage name="kategorie" />
                    </div>

                    <div className="alterAbfrageAbschnitt">
                        <label htmlFor="alter">Alter</label>
                        <div className="alterBeideFelder">
                            <Field className="alterEingabefeld" name="alter" type="number" placeholder="Von"/>
                            <ErrorMessage name="alter" />
                        </div>
                    </div>

                    <div className="ortAbfrage">
                        <label htmlFor="toggles">Ort</label>
                        <div className="toggle_drinnen">
                        <Switch
                                        className="toggle-switch" 
                                        name="drinnen"
                                        value="true"
                                        checked={values.drinnen === "true"}
                                        onChange={(event, checked) => {
                                            setFieldValue("drinnen", checked ? "true" : "false");
                                        }}
                                        />
                            <label htmlFor="drinnen">Drinnen</label>
                        </div>
                        <div className="toggle_draussen">
                                        <Switch
                                        className="toggle-switch" 
                                        name="draussen"
                                        value="true"
                                        checked={values.draussen === "true"}
                                        onChange={(event, checked) => {
                                            setFieldValue("draussen", checked ? "true" : "false");
                                        }}
                                        />
                            <label htmlFor="draussen">Draußen</label>
                        </div>
                    </div>
                </div>
                <div className="button-container">   
                {/* <Link to={{pathname: "/content"}} state={values} style={{color: "black"}}> */}
                <Button type="submit" version="dick" isDisabled={false}>Anwenden</Button> 
                {/* </Link> */}
                </div>
            </Form>
         </div>
        )}
    </Formik>
    </>
  );
};

export default FilterMenu;