import React from "react";
import ReactCountryFlag from "react-country-flag";

const CountryFlag = ({ countryCode, name, styleData, className }) => {
  return (
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={styleData}
      className={`${className}`}
    />
  );
};

export default CountryFlag;
