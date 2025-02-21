import React from "react";

const DataFilters = () => {
  return (
    <div
      className="d-flex"
      style={{
        width: "144px",
        height: "36px",
        padding: "0px 12px",
        gap: "8px",
        borderRadius: "4px 0px 0px 0px",
        border: "1px solid",
      }}
    >
      <img src="Vector.png" width="16px" height="16px" />
      <select
        className=""
        role="combobox"
        aria-label="Search"
        aria-expanded="false"
        aria-haspopup="listbox"
        style={{border:'none'}}
      >
        <option
          value="option1"
          style={{
            fontFamily: "Roboto",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "19px",
            letterSpacing: "0.01em",
            textAlign: "left",
          }}
        >
          Past 30 Days
        </option>
        <option
          value="option2"
          style={{
            fontFamily: "Roboto",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "19px",
            letterSpacing: "0.01em",
            textAlign: "left",
          }}
        >
          Option 2
        </option>
        <option
          value="option3"
          style={{
            fontFamily: "Roboto",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "19px",
            letterSpacing: "0.01em",
            textAlign: "left",
          }}
        >
          Option 3
        </option>
      </select>
    </div>
  );
};

export default DataFilters;
