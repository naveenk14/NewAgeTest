import React, { useState } from "react";
import { Autocomplete, Chip, FormHelperText, Input, Stack, TextField } from "@mui/material";

const ChipsSchedule = ({ setforminputs, forminputs,selected,setSelected,errorEmail }) => {
  
  const [inputValue, setInputValue] = useState("");
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [error, setError] = useState(false);


  function onChange(e, value) {
    // error
    const errorEmail = value.find((email) => !regex.test(email));
    if (errorEmail) {
      // set value displayed in the textbox
      setInputValue(errorEmail);
      setError(true);
    } else {
      setError(false);
    }
    // Update state
    setSelected(value.filter((email) => regex.test(email)));
  }

  function onDelete(value) {
    setSelected(selected.filter((e) => e !== value));
  }

  function onInputChange(e, newValue) {
    setInputValue(newValue);
  }

  return (
    <>
      
        <Autocomplete
        multiple
        // limitTags={2}
        onChange={onChange}
        style={{ marginBottom: "10px" }}
        id="multiple-limit-tags"
        value={selected}
        inputValue={inputValue}
        onInputChange={onInputChange}
        options={[]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} onDelete={()=>onDelete(option)} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="New email"
            sx={{ width: "500px" }}
            type="email"
            label="Email Addresses"
            error={error || errorEmail.email}
            helperText={error ? "Please enter a valid email address": errorEmail.email ? "Please Enter Email Address":null }
          />
        )}
      />  
      {/* {
        errorEmail.email && <FormHelperText style={{color:"rgb(255 0 0 / 60%)",marginLeft:"0px"}}>Please Enter Email Address</FormHelperText>  

       } */}
    </>
  );
};

export default ChipsSchedule;
