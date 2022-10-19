import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";

export default function RadioGroupComponent(params) {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      {params.data.map((radio, index) => {
        const value = radio.value ?? radio.id;
        const label = radio.label || radio.text;
        return (
          <FormControlLabel
            key={index}
            value={value}
            control={<Radio />}
            label={label}
          />
        );
      })}
    </RadioGroup>
  );
}
