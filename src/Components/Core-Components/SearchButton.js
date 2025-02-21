import React from "react";

const SearchButton = ({children}) => {
  return (
    <>
      <button
        className="w-50 p-2 search-button"
        style={{
          border: "1px solid rgba(0,0,0,0.09)",
          borderRadius: "5px",
          background:'white'
        }}
      >
        <span className="d-flex justifyContent-start"  style={{opacity:'0.5'}}><i className="fas fa-search p-1"></i><span className="">{children}</span></span>
      </button>
    </>
  );
};

export default SearchButton;
