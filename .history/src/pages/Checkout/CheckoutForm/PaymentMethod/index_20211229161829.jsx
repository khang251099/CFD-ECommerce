import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import credit from "../../../../assets/images/credit.png";
import logoCredit from "../../../../assets/images/logo-credit-card.png";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Radio
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

PaymentMethod.propTypes = {};

function PaymentMethod(props) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <h4 className="checkout-heading">Payment method</h4>
      <div className="desc-step">
        <p className="checkout-desc"> Please enter your payment method</p>
        <p className="step">Step 3 of 5</p>
      </div>
      <FormControl component="fieldset"></FormControl>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <div className="method-logo">
              <img src={credit} />
              <img src={logoCredit} className="logo-method-payment" />
            </div>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RadioGroup
            aria-label="Credit card"
            name="credit card"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit card"
            />
            {/* <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="Paypal"
            /> */}
            {/* <FormControlLabel
            value="bitcoin"
            control={<Radio />}
            label="Bitcoin"
          /> */}
          </RadioGroup>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default PaymentMethod;
