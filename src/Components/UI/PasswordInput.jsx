import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

function PasswordInput(props) {
  const { label, name, toggle, fullWidth, register, errors } = props;
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible((prev) => {
      return !prev;
    });
  }

  return (
    <TextField
      {...register(name, { required: { value: true, message: "*Required" } })}
      label={label}
      name={name}
      type={visible ? "text" : "password"}
      fullWidth={fullWidth}
      size="small"
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : ""}
      InputProps={{
        ...(toggle
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClick}>
                    {visible ? <RiEyeOffFill /> : <RiEyeFill />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : {}),
      }}
    />
  );
}

PasswordInput.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggle: PropTypes.bool,
  register: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
};

export default PasswordInput;
