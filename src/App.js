// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Navigate,
//   useLocation,
// } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Layout/Header";
// import RecentBooking from "./Components/QuickBooking/RecentBooking";
// // import Dashboard from "./Components/Dashboard";
// // import Home from "./Components/Inbox";
// import ShipmentsHome from "./Components/Shipments";
// import Invoice from "./Components/Invoice/Invoice";
// import { Footer } from "./Components/Layout/Footer";
// import Quotation from "./Components/Quotations/Quotation";
// import { useSelector, useDispatch } from "react-redux";
// import { LoginRequest } from "./Redux/Actions/LoginAction";
// import Cookies from "js-cookie";
// import Inbox from "./Components/Inbox/Inbox";
// import ShipmentBase from "./Components/ShipmentDetails/ShipmentTable/ShipmentBase";
// import { CircularProgress, Box } from "@mui/material";
// import ProfileBase from "./Components/Profile/ProfileBase";
// import FindNewRate from "./Components/Quotations/QuotaionTable/QModal/FindNewRate/FindNewRate";
// import Quick from "./Components/QuickBooking/Quick";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import shipgif from "./assets/shiploadinggif.gif"

// const MainContent = ({
//   showmap,
//   setShowmap,
//   showText,
//   setShowText,
//   showReselt,
//   setShowReselt,
// }) => {
//   const location = useLocation();
//   const showfooter = location.pathname !== "/quotation" || !showReselt;
//   const [showHeader, setShowHeader] = useState(true);
//   const [originPort, setOriginPort] = useState(null);
//   const [destPort, setDestPort] = useState(null);

//   const handleScroll = () => {
//     if (location.pathname === "/quotation" && showReselt) {
//       const scrollTop = window.scrollY;
//       setShowHeader(scrollTop <= 0);
//     } else {
//       setShowHeader(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location, showReselt]);
//   return (
//     <>
//       {showHeader && (
//         <Header
//           setShowmap={setShowmap}
//           setShowText={setShowText}
//           setShowReselt={setShowReselt}
//         />
//       )}
//       <div style={{ marginTop: "76px" }}></div>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ShipmentsHome
//                 showmap={showmap}
//                 setShowmap={setShowmap}
//                 showText={showText}
//                 setShowText={setShowText}
//                 setOriginPort={setOriginPort} 
//                 setDestPort={setDestPort}
//               />
//             }
//           />
//           <Route path="/recentBooking" element={<RecentBooking />} />
//           <Route path="/inbox" element={<Inbox />} />
//           <Route path="/invoice" element={<Invoice />} />
//           <Route
//             path="/quotation"
//             element={
//               <Quotation
//                 showReselt={showReselt}
//                 setShowReselt={setShowReselt}
//                 showHeader={showHeader}
//                 setShowHeader={setShowHeader}
//                 originPort={originPort} 
//                 setOriginPort={setOriginPort}
//                 destPort={destPort} 
//                 setDestPort={setDestPort}
//               />
//             }
//           />
//           <Route path="/shipmentdetails" element={<ShipmentBase />} />
//           <Route path="/findnewrate" element={<FindNewRate />} />
//           <Route path="/profile" element={<ProfileBase />} />
//           <Route path="/quick" element={<Quick />} />
//         </Routes>
//       {showfooter && <Footer />}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ToastContainer />
//     </>
//   );
// };

// function App() {
//   const dispatch = useDispatch();
//   const jwtToken = useSelector((state) => state.Login?.booking?.Token);
//   const [loading, setLoading] = useState(true);
//   const [showmap, setShowmap] = useState(false);
//   const [showText, setShowText] = useState(false);
//   const [showReselt, setShowReselt] = useState(false);
//   const parseUrlParams = () => {
//     const currentUrl = window.location.href;
//     const queryString = currentUrl.split("?")[1];
//     const params = {};

//     if (queryString) {
//       queryString.split("&").forEach((param) => {
//         const [key, value] = param.split("=");
//         params[key] = value;
//       });
//     }

//     return params;
//   };

//   useEffect(() => {
//     const savedToken = Cookies.get("jwtToken");

//     if (savedToken) {
//       setLoading(false);
//       return;
//     }

//     const { id, token } = parseUrlParams();

//     if (id && token && !jwtToken) {
//       dispatch(LoginRequest({ sUsername: id, spassword: token }));
//     } else {
//       setLoading(false);
//     }

//     const timeout = setTimeout(() => {
//       if (!jwtToken) {
//         window.location.href = "http://www.freightsystems.com";
//       }
//     }, 5000);

//     return () => clearTimeout(timeout);
//   }, [dispatch, jwtToken]);

//   useEffect(() => {
//     if (jwtToken) {
//       Cookies.set("jwtToken", jwtToken, { expires: 7 });
//       setLoading(false);
//     }
//   }, [jwtToken]);

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         {/* <CircularProgress style={{ color: "red" }} /> */}
//         <img src={shipgif} width="140px" height="140px" />
//       </Box>
//     );
//   }

//   return (
//     <BrowserRouter>
//       <MainContent
//         showmap={showmap}
//         setShowmap={setShowmap}
//         showText={showText}
//         setShowText={setShowText}
//         showReselt={showReselt}
//         setShowReselt={setShowReselt}
//       />
//     </BrowserRouter>
//   );
// }

// export default React.memo(App);

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import RecentBooking from "./Components/QuickBooking/RecentBooking";
import ShipmentsHome from "./Components/Shipments";
import Invoice from "./Components/Invoice/Invoice";
import { Footer } from "./Components/Layout/Footer";
import Quotation from "./Components/Quotations/Quotation";
import { useSelector, useDispatch } from "react-redux";
import { LoginRequest } from "./Redux/Actions/LoginAction";
import Cookies from "js-cookie";
import Inbox from "./Components/Inbox/Inbox";
import ShipmentBase from "./Components/ShipmentDetails/ShipmentTable/ShipmentBase";
import { CircularProgress, Box } from "@mui/material";
import ProfileBase from "./Components/Profile/ProfileBase";
import FindNewRate from "./Components/Quotations/QuotaionTable/QModal/FindNewRate/FindNewRate";
import Quick from "./Components/QuickBooking/Quick";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login/Login";

function MainApp({showReselt,setShowReselt}) {
  const [showmap, setShowmap] = useState(false);
  const [showText, setShowText] = useState(false);
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [originPort, setOriginPort] = useState(null);
  const [destPort, setDestPort] = useState(null);
  // const [showReselt, setShowReselt] = useState(false);
  // const showfooter = location.pathname !== "/quotation" || !showReselt;

  const handleScroll = () => {
    if (location.pathname === "/quotation" && showReselt) {
      const scrollTop = window.scrollY;
      setShowHeader(scrollTop <= 0);
    } else {
      setShowHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location, showReselt]);

  const isLoginPage = location.pathname === "/";
  const contentStyle = {
    marginTop: isLoginPage ? "0" : "4rem",
  };
  return (
    <>
      {!isLoginPage && (
        <Header setShowmap={setShowmap} setShowText={setShowText} setShowReselt={setShowReselt} />
      )}
      <div style={contentStyle}>
        <Routes>
          <Route
            path="/shipment"
            element={
              <ShipmentsHome
                showmap={showmap}
                setShowmap={setShowmap}
                showText={showText}
                setShowText={setShowText}
                setOriginPort={setOriginPort} 
                setDestPort={setDestPort}
              />
            }
          />
          <Route path="/recentBooking" element={<RecentBooking />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/quotation" element={
            <Quotation
            showReselt={showReselt}
            setShowReselt={setShowReselt}
            showHeader={showHeader}
            setShowHeader={setShowHeader}
            originPort={originPort} 
            setOriginPort={setOriginPort}
            destPort={destPort} 
            setDestPort={setDestPort}
           />} />
          <Route path="/shipmentdetails" element={<ShipmentBase />} />
          <Route path="/findnewrate" element={<FindNewRate />} />
          <Route path="/profile" element={<ProfileBase />} />
          <Route path="/quick" element={<Quick />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
      {!isLoginPage && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
    </>
  );
}

function App() {
  // const dispatch = useDispatch();
  // const jwtToken = useSelector((state) => state.Login?.Token);
  // const [loading, setLoading] = useState(true);

  // const parseUrlParams = () => {
  //   const currentUrl = window.location.href;
  //   const queryString = currentUrl.split("?")[1];
  //   const params = {};

  //   if (queryString) {
  //     queryString.split("&").forEach((param) => {
  //       const [key, value] = param.split("=");
  //       params[key] = value;
  //     });
  //   }

  //   return params;
  // };

  // useEffect(() => {
  //   const savedToken = Cookies.get("jwtToken");

  //   if (savedToken) {
  //     setLoading(false);
  //     return;
  //   }

  //   const { id, token } = parseUrlParams();

  //   if (id && token && !jwtToken) {
  //     dispatch(LoginRequest({ sUsername: id, spassword: token }));
  //   } else {
  //     setLoading(false);
  //   }

  //   const timeout = setTimeout(() => {
  //     if (!jwtToken) {
  //       window.location.href = "http://webtool.newage-nxt.com";
  //     }
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, [dispatch, jwtToken]);

  // useEffect(() => {
  //   if (jwtToken) {
  //     Cookies.set("jwtToken", jwtToken, { expires: 7 });
  //     // setLoading(false);
  //   }
  // }, [jwtToken]);

  // if (loading) {
  //   return (
  //     <Box
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <CircularProgress style={{ color: "#71e8d2" }} />
  //     </Box>
  //   );
  // }

  const [showReselt, setShowReselt] = useState(false);

  return (
    <BrowserRouter>
      <MainApp
        showReselt={showReselt}
        setShowReselt={setShowReselt}
      />
    </BrowserRouter>
  );
}

export default React.memo(App);
