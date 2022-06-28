import { Select as MuiSelect } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useFormContext } from "react-hook-form";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = (props) => {
  const { label, name, options, isRequired = false } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { ref: selectRef, ...selectRefInputRest } = register(name, {
    required: {
      value: isRequired ? isRequired : false,
      message: `${label} is required.`,
    },
  });

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <MuiSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          inputRef={selectRef}
          {...selectRefInputRest}
          defaultValue="location"
        >
          {options.map((option, idx) => {
            return (
              <MenuItem value={option} key={idx}>
                {option}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
