import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldInput = (props) => {
  const { label, placeholder, name, type, onChange } = props;

  const onChangeInput = (e) => {
    onChange(e);
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={label}
        variant="standard"
        placeholder={placeholder}
        sx={{ m: 2 }}
        name={name}
        type={type}
        fullWidth
        onChange={onChangeInput}
      />
    </div>
  );
};

export default TextFieldInput;
