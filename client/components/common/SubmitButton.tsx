import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface SubmitButtonProps {
  buttonText?: string;
  variant?: ButtonProps["variant"];
  loading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const {
    buttonText = "Submit",
    variant = "contained",
    loading = false,
  } = props;

  return (
    <Button fullWidth type="submit" variant={variant}>
      {loading ? <CircularProgress size={22} color="inherit" /> : buttonText}
    </Button>
  );
};

export default SubmitButton;
