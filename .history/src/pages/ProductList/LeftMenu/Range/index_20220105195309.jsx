import React, { useState } from "react";
import mockData from "../../../../core/mockData/mock";

//Material ui
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography } from "@material-ui/core";
import "./style.scss";

function valueText(value) {
  return `${value}$`;
}

const minDistance = 10;

const Range = (props) => {
  const { data } = props;
  const pro = mockData.data.product;

  const [value, setValue] = useState([20, 37]);
  const schema = yup.object().shape({
    min: yup.number().min(1, "Min value is 0"),
    max: yup.number().max(100, "Max value 100"),
  });

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  //   const filterMin= data.filter(item=>item.includes(min) || min.length==='');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };
  return (
    <>
      <div className="range-slider" style={{ marginTop: "50px" }}>
        <h3 className="title">Price</h3>
        <Box sx={{ width: 232 }}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueText}
            disableSwap
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
