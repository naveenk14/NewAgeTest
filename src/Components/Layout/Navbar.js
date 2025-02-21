import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, Stack } from "@mui/material";

const Navbar = ({ setShowText, setShowmap,showReselt }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const handleClick = () => {
    // setShowText(false);
  };
  const handleNavHome = () => {
    if (pathname === "/") {
      setShowText(false);
      setShowmap(false);
      
    } else {
      navigate("/");
    }
  };
  const homeBreadcrumb = (
    <Link
      underline="hover"
      key="1"
      onClick={handleNavHome}
      style={{
        fontSize: "14px",
        color: "#ACB8C4",
        fontWeight: "400",
        cursor: "pointer",
      }}
    >
      Home
    </Link>
  );
  const shipmentsBreadcrumb = (
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/shipments"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      Shipments
    </Link>
  );
  const quotationsBreadcrumb = (
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/quotation"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      {showReselt ? "Quotations Results" : "Quotations"}
      
    </Link>
  );

  const quotationsResultBreadcrumb = (
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/quotation"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      Quotations Result
    </Link>
  );
  const invoiceBreadcrumb = (
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/invoice"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      Invoice
    </Link>
  );

  const quickBreadcrumb = (
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/quick"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      Quick Booking
    </Link>
  );
  const breadcrumbs = [homeBreadcrumb];

  if (pathname === "/shipments") {
    breadcrumbs.push(shipmentsBreadcrumb);
  } else if (pathname === "/quotation") {
    breadcrumbs.push(quotationsBreadcrumb);
  } else if (pathname === "/findnewrate") {
    breadcrumbs.push(quotationsResultBreadcrumb);
  } else if (pathname === "/invoice") {
    breadcrumbs.push(invoiceBreadcrumb);
  } else if(pathname === "/quick"){
    breadcrumbs.push(quickBreadcrumb);
  }

  return (
    <div className="d-flex justify-content-between mx-auto">
      <Stack>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </div>
  );
};

export default Navbar;
