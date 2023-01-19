import {React, useEffect, useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Switch } from '@mui/material';
import Button from "../Button/Button";
import "./FilterMenu.css";
import { Navigate } from 'react-router-dom';

const FilterMenu = ({navType, onNavTypeChange, search, onSearchChange}) => {
    const [toContent, setToContent] = useState(false);
    console.log("Search" + search);
    useEffect(() => {
        onNavTypeChange("filterPage");
      });
    return (
        <>
     {toContent && <Navigate to="/content"/>}
      <Formik 
        initialValues={{ 
            city: search.city, 
            activity: "", 
            age: "", 
            location_Inside: "true", 
            location_Outside: "true"}}

        validationSchema={Yup.object({
            city: Yup.string()
            .max(15, 'Der Stadtname ist zu lang!')
            .required('Bitte angeben'),
            age: Yup.string()
            .max(2, 'Nur 2 Zahlen pls'),
            })}

        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            values.city=values.city.toLowerCase();
            console.log("Search Values:" + JSON.stringify(values));
            onSearchChange(JSON.stringify(values));
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
                <div className="abfragenfilter">
                    <div className="standortAbfrageFilter">
                        <label htmlFor="city">Standort</label>
                        <Field className="standortEingabefeld" name="city" type="text" placeholder="Gib deine Stadt ein..."/>
                        <ErrorMessage name="city" />
                    </div>
                    
                    <div className="kategorieAbfrage">
                        <label htmlFor="activity">Aktivität</label>
                        <Field className="kategorieEingabefeld" name="activity" as="select" placeholder="Wähle eine Kategrie aus...">
                            <option disabled value="">Wähle eine Aktivität...</option>
                            <option></option>
                            <option>Fußball</option>
                            <option>Teetreff</option>
                            <option>Brettspiele</option>
                            <option>Tupperparty</option>
                        </Field>

                        <ErrorMessage name="activity" />
                    </div>

                    <div className="alterAbfrageAbschnitt">
                        <label htmlFor="age">Alter</label>
                        <div className="alterBeideFelder">
                            <Field className="alterEingabefeld" name="age" type="number" placeholder="Von"/>
                            <ErrorMessage name="age" />
                        </div>
                    </div>

                    <div className="ortAbfrage">
                        <label htmlFor="toggles">Ort</label>
                        <div className="toggle_drinnen">
                        <Switch
                                        className="toggle-switch" 
                                        name="location_Inside"
                                        value="true"
                                        checked={values.location_Inside === "true"}
                                        onChange={(event, checked) => {
                                            setFieldValue("location_Inside", checked ? "true" : "false");
                                        }}
                                        />
                            <label htmlFor="location_Inside">Drinnen</label>
                        </div>
                        <div className="toggle_draussen">
                                        <Switch
                                        className="toggle-switch" 
                                        name="location_Outside"
                                        value="true"
                                        checked={values.location_Outside === "true"}
                                        onChange={(event, checked) => {
                                            setFieldValue("location_Outside", checked ? "true" : "false");
                                        }}
                                        />
                            <label htmlFor="location_Outside">Draußen</label>
                        </div>
                    </div>
                </div>
                <div className="button-container">   
                <Button type="submit" version="dick" isDisabled={false}>Suchen</Button> 
                </div>
            </Form>
         </div>
        )}
    </Formik>
    </>
  );
};

export default FilterMenu;