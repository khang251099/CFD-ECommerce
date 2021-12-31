import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

Tab.propTypes = {};

function Tab(props) {
  const [value, setValue] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Active" />
          <Tab label="Active" disabled />
          <Tab label="Active" />
        </Tabs>
      </Paper>
    </>
  );
}

export default Tab;
