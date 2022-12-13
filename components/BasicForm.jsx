import React from "react";
import FormControl from "@mui/material/FormControl";
import TextFieldInput from "./TextFieldInput";

export const FormInput = (props) => {
  const { onChange } = props;
  return (
    <FormControl>
      <TextFieldInput
        label="Name"
        placeholder="Enter Name"
        name="name"
        type="text"
        onChange={onChange}
      />
      <TextFieldInput
        label="WQty"
        placeholder="Enter WQty"
        name="wqty"
        type="number"
        onChange={onChange}
      />
      <TextFieldInput
        label="SRate"
        placeholder="Enter SRate"
        name="srate"
        type="number"
        onChange={onChange}
      />
      <TextFieldInput
        label="Category"
        placeholder="Enter Category"
        name="category"
        type="text"
        onChange={onChange}
      />
    </FormControl>
  );
};
