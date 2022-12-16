import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Switch } from '@mui/material';
import Button from "../Button/Button";
import "./FilterMenu.css";

const FilterMenu = () => {
  return (
      <Formik 
        initialValues={{ standort: '', alter_von: "", alter_bis:""}}
        validationSchema={Yup.object({
            standort: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            alter_von: Yup.string()
            .max(2, 'Must be 2 characters or less')
            .required('Required'),
            alter_bis: Yup.string()
            .max(2, 'Must be 2 characters or less')
            .required('Required'),
            })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
        <div className="form">
            <Form>
                <div className="abfragen">
                    <div className="standortAbfrage">
                        <label htmlFor="standort">Standort</label>
                        <Field className="standortEingabefeld" name="standort" type="text" placeholder="Deine Stadt" />
                        <ErrorMessage name="standort" />
                    </div>
                    
                    <div className="alterAbfrageAbschnitt">
                        <label htmlFor="alter_von">Alter</label>
                        <div className="alterBeideFelder">
                            <Field className="alterEingabefeld" name="alter_von" type="number" placeholder="Von"/>
                            <ErrorMessage name="alter_von" />
                            <hr className='von-bis'/>
                            <Field className="alterEingabefeld" name="alter_bis" type="number" placeholder="Bis"/>
                            <ErrorMessage name="alter_bis" />
                        </div>
                    </div>

                    <div className="ortAbfrage">
                        <label htmlFor="toggles">Ort</label>
                        <div className="toggle_drinnen">
                            <Field className="toggle-switch" name="drinnen" component={Switch} />
                            <label htmlFor="toggles">Drinnen</label>
                        </div>
                        <div className="toggle_draussen">
                            <Field name="draussen" component={Switch} color="primary" />
                            <label htmlFor="draussen">Draußen</label>
                        </div>
                    </div>
                </div>
                <div className="button-wrapper">    
                <Button version="dick" isDisabled={false}>Anwenden</Button> 
                </div>
            </Form>
        </div>
    </Formik>
  );
};

export default FilterMenu;