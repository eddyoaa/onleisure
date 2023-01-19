import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';
import { Switch } from '@mui/material';

const CreatePageFour = ({navType, onNavTypeChange,progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [toValueCreate, setToValueCreate] = useState(false);
    console.log(createValues);
    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(60);
      });

      return ( 
        <div className="createPages">
            {toValueCreate && <Navigate to="/create/5"/>}
            <Formik
            initialValues={{ 
                age: [],
                age1: createValues.age[0],
                age2: createValues.age.at(-1),
                location_Outside: createValues.location_Outside,
                location_Inside: createValues.location_Inside,
                activity: createValues.activity
            }}
    
            validationSchema={Yup.object({
                age1: Yup.string()
                .max(2, 'Gib bitte ein gültiges Alter an')
                .required('Bitte angeben'),

                age2: Yup.string()
                .max(2, 'Gib bitte ein gültiges Alter an')
                .required('Bitte angeben'),

                })}
    
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    const age = [];
                    for (let i = parseInt(values.age1); i <= parseInt(values.age2); i++) {
                        age.push(i);
                      }
                    values.age = age;
                    delete values['age1'];
                    delete values['age2'];
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
                <div className="abfragen" id="createPageOne">
                    <h3 className="text-one">Gib mehr Details an</h3>
                    <h3 className="labelAlter">Alter</h3>
                    <div className="AlterAbfragen">
                        
                        <Field className="alter1Eingabefeld" name="age1" type="number" placeholder="Von..." />
                        <ErrorMessage name="title" />
                  
                       
                        <Field className="alter2Eingabefeld" name="age2" type="number" placeholder="Bis..." />
                        <ErrorMessage name="description" />
                    </div>

                    <div className="ortAbfrage2">
                        <label htmlFor="toggles">Ort</label>
                        <div className="toggle_drinnen">
                                    <Switch
                                        size="large"
                                        className="toggle-switch2" 
                                        name="location_Inside"
                                        value="true"
                                        checked={values.location_Inside === "true"}
                                        onChange={(event, checked) => {
                                            setFieldValue("location_Inside", checked ? "true" : "false");
                                        }}
                                        />
                            <label htmlFor="location_Inside">Drinnen</label>
                        </div>
                        <div className="toggle_draussen2">
                                        <Switch
                                        size="large"
                                        className="toggle-switch2" 
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

                    <div className="AktivitätAbfragen">
                        <h4 className="labelAktiv">Aktivität</h4>
                        <Field className="kategorieEingabefeld" name="activity" as="select" placeholder="Wähle eine Kategrie aus...">
                                <option disabled value="">Wähle eine Aktivität...</option>
                                <option></option>
                                <option>Fußball</option>
                                <option>Teetreff</option>
                                <option>Brettspiele</option>
                                <option>Tupperparty</option>
                            </Field>
                    </div>

                

                <div className="buttonCreate4">
                    <Button version="dick" isDisabled={false}>Weiter</Button>
                </div>
                </div>
            </Form>
        </div>
        )}
            </Formik>
            </div>
     );}




    // return ( 
    //     <div className="createPages">
    //     <Link to="/create/5" style={{color: "black"}}>
    //     <div className="button" id="create">
    //         <Button version="duenn" isDisabled={false}>Weiter</Button>
    //     </div>
    //     </Link>
    //     </div>
    //  );}
 
export default CreatePageFour;





    

