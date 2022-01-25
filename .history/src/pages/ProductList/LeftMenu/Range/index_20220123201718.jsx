import React, { useState } from "react";

//Material ui
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography } from "@material-ui/core";

import "./style.scss";

const Range = (props) => {
  const { rangeSelector, value } = props;
  console.log("value", value);

  const schema = yup.object().shape({
    min: yup.number().min(1, "Min value is 0"),
    max: yup.number().max(100, "Max value 100"),
  });

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="range-slider" style={{ marginTop: "50px" }}>
        <h3 className="title">Price</h3>
        <Box sx={{ width: 232 }}>
          <Slider
            value={value}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{ marginTop: "23px" }}
        >
          <FormControl sx={{ width: 300 }}>
            <TextField
              id="min-outline"
              label="Min"
              type="number"
              variant="outlined"
              {...register("min")}
              error={errors.min && true}
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.firstname?.message}
            </Typography>
            <TextField
              id="max-outline"
              label="Max"
              type="number"
              variant="outlined"
              {...register("max")}
              error={errors.max && true}
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.firstname?.message}
            </Typography>
          </FormControl>
        </Grid>
      </div>
    </>
  );
};

export default Range;
