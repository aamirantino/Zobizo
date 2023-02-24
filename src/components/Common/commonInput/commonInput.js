import { TextField } from "@mui/material";
import React from "react";

const CommonInput = ({ title, value, height, width }) => {
  return (
    <div>
      <TextField
        // id="outlined-required"
        label={title}
        defaultValue={value}
        sx={{ height: height, width: width }}
      />
    </div>
  );
};

export default CommonInput;
