import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useFormContext } from "react-hook-form";

interface ComboBoxProps {
  label: string;
  name: string;
  options:
    | {
        id: string;
        label: string;
      }[]
    | undefined;
  isRequired?: boolean;
}

const ComboBox: React.FC<ComboBoxProps> = (props) => {
  const { name, label, options, isRequired = false } = props;

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { ref: comboxRef, ...comboxRefInputRest } = register(name, {
    required: {
      value: isRequired ? isRequired : false,
      message: `${label} is required.`,
    },
  });

  if (!options) return null;

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      sx={{ width: "100%" }}
      {...comboxRefInputRest}
      ref={comboxRef}
      onChange={(event, option) => {
        if (option?.id) {
          setValue(name, option.id);
        }
      }}
      renderInput={(params) => {
        return <TextField {...params} label={label} required={isRequired} />;
      }}
    />
  );
};

export default ComboBox;
