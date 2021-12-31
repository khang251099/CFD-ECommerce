import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

Confirmation.propTypes = {};

function Confirmation(props) {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  return (
    <>
      <h4 className="checkout-heading">Confirmation </h4>

      <div className="desc-step">
        <p className="checkout-desc">
          We are getting to the end. Just few clicks and your order si ready!
        </p>
        <p className="step">Step 5 of 5</p>
      </div>
      <FormControl required error={error} component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        {/* <FormHelperText>You can display an error</FormHelperText> */}
      </FormControl>
    </>
  );
}

export default Confirmation;
