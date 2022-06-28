import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface DatePickerProps {
  name: string;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { name } = props;

  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  React.useEffect(() => {
    const today = new Date();
    setValue(name, today);
  }, [name, setValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <MuiDatePicker
            onChange={(date) => field.onChange(date)}
            value={field.value}
            renderInput={(params) => (
              <TextField {...params} defaultValue={field.value} label="Date" />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};
export default DatePicker;
