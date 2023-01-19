import React from "react";
import { DateTimePicker} from "@mui/x-date-pickers";
import { TextField } from "@mui/material";



const DatePickerField = ({ field, form, ...other }) => {
    const currentError = form.errors[field.name];
  
    return (
      <DateTimePicker
        clearable
        disablePast
        name={field.name}
        value={field.value}
        format="dd/MM/yyyy"
        helperText={currentError}
        error={Boolean(currentError)}
        onError={error => {
          // handle as a side effect
          if (error !== currentError) {
            form.setFieldError(field.name, error);
          }
        }}
        renderInput={(params) => <TextField {...params} />}
        // if you are using custom validation schema you probably want to pass `true` as third argument
        onChange={date => form.setFieldValue(field.name, date, true)}
        {...other}
      />
    );
  };
  export default DatePickerField;