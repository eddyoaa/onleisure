import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from 'yup';


const CreatePageFive = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [toValueCreate, setToValueCreate] = useState(false);
    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(80);
      });

      return ( 
        <div className="createPages">
            {toValueCreate && <Navigate to="/create/inspect"/>}
            <Formik
            initialValues={{ 
                telefon: createValues.telefon,
                eMail: createValues.eMail 
            }}
    
            validationSchema={Yup.object({
            

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
                    <h3 className="text-one">Kontaktdetails</h3>
    
                    <div className="TitelAbfragen">
                        
                        <Field className="standortEingabefeld" name="telefon" type="text" placeholder="Gib eine Telefonnummer ein..." />
                        <ErrorMessage name="telefon" />
                    </div>
    
                    <div className="InfoAbfrage">
                       
                        <Field className="standortEingabefeld" name="eMail" type="text" placeholder="Gib eine e-Mail Adresse ein..." />
                        <ErrorMessage name="eMail" />
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

  
export default CreatePageFive;

// return ( 
//     <div className="createPages">
//     <Link to="/create/inspect" style={{color: "black"}}>
//     <div className="button" id="create">
//         <Button version="duenn" isDisabled={false}>Weiter</Button>
//     </div>
//     </Link>
//     </div>
//  );}




