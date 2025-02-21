import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Row, Button, Image } from "antd";
import "./FindNewRate.css";
import Stripes from "../../../../../assets/Stripes.png";
import Avatar from "../../../../../assets/Avatar.png";
import RightArrow from "../../../../../assets/rightarrow.svg";
import QuoteRequestModal from "./QuoteRequestModal";
import { LeftOutlined } from "@ant-design/icons";

function QuoteRequest({ setShowReselt, checkedItems, setCheckedItems,settoscheck }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const closeicon = document.querySelector(".ant-modal-close");
  if (closeicon) {
    closeicon.remove();
  }
  const Footer = document.querySelector(".ant-modal-footer");
  if (Footer) {
    Footer.remove();
  }

  // const scrolling=()=>{
  //   console.log("scrolling")
  //   window.scrollTo(0,60)
  // }

  const hasPageBeenRendered = useRef(false)

  // useEffect(() => {
  //   // if(hasPageBeenRendered?.current){
  //     window.scrollTo(0,60)
  //   // }  
  //   //   hasPageBeenRendered.current = true

  // },[])

  // window.scrollTo(0,60)
  

  const contentPara = () => {
    if (checkedItems?.StackableCargo === false) {
      return (
        <>
          Apologies for the inconvenience. At present, we are unable to provide
          instant results for non-stackable cargo. Kindly submit a non-instant
          quote request, and our dedicated customer service team will promptly
          review your request, providing you with the applicable non-stackable
          charges as soon as possible.
        </>
      );
    } else if (checkedItems?.NonHarzardousCargo === false) {
      return (
        <>
          Apologies for the inconvenience. At present, we are unable to provide
          instant results for hazardous cargo. Kindly submit a non-instant quote
          request, and our dedicated customer service team will promptly address
          your inquiry, providing you with the applicable charges for hazardous
          cargo as soon as possible.
        </>
      );
    } else {
      return (
        <>
          Apologies for the inconvenience. At present, we are unable to provide
          instant results for this cargo. Kindly submit a non-instant quote
          request, and our dedicated customer service team will promptly review
          your request, providing you with the applicable freight charges as
          soon as possible.
        </>
      );
    }
  };

  const ButtonLabel = () => {
    if (checkedItems?.StackableCargo === false) {
      return <>Add Stackable Cargo charges</>;
    } else if (checkedItems?.NonHarzardousCargo === false) {
      return <>Add Harzardous Cargo charges</>;
    }else if(checkedItems?.exportClearance === true){
      return <>Remove Export Clearance</>;
    }else if(checkedItems?.ImportClearance === true){
      return <>Remove Import Clearance</>;
    }else if (checkedItems?.cargoPickup === true) {
      return <>Remove Cargo Pickup Charges</>;
    } else if (checkedItems?.CargoDelivery === true) {
      return <>Remove Cargo Delivery Charges</>;
    } else {
      return (
        <div
          onClick={() => setShowReselt(false)}
          className="d-flex flex-direction-row gap-1"
        >
          <LeftOutlined
            style={{
              width: "13px",
              height: "13px",
              marginTop: "8px",
            }}
          />
          <span
            style={{
              width: "18px",
              height: "18px",
              marginTop: "4px",
            }}
          >
            Go Back
          </span>
        </div>
      );
    }
  };
  const handleClick = () => {
    settoscheck(true)
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.StackableCargo === false) {
        return { ...prevCheckedItems, StackableCargo: true };
      } else if (prevCheckedItems.NonHarzardousCargo === false) {
        return { ...prevCheckedItems, NonHarzardousCargo: true };
      }else if (prevCheckedItems.exportClearance === true) {
        return { ...prevCheckedItems, exportClearance: false };
      }else if (prevCheckedItems.ImportClearance === true) {
        return { ...prevCheckedItems, ImportClearance: false };
      }else if (prevCheckedItems.cargoPickup === true) {
        return { ...prevCheckedItems, cargoPickup: false };
      }else if (prevCheckedItems.CargoDelivery === true) {
        return { ...prevCheckedItems, CargoDelivery: false };
      }
      return prevCheckedItems;
    });
  };
  const image =
    checkedItems?.NonHarzardousCargo !== false &&
    checkedItems?.StackableCargo !== false ? (
      <Image
        src={RightArrow}
        alt="arrow"
        className="me-3"
        preview={false}
        style={{
          cursor: "pointer",
          color: "#69b1ff",
        }}
      />
    ) : (
      ""
    );

  return (
    <>
      <Card className="Quote-Card" style={{ padding: "0px" }}>
        <Row style={{ rowGap: "13px", padding: "15px 8px" }}>
          <Col span={24} className="d-flex justify-content-center align-items-center">
            {/* <img src={Stripes} alt="lines" className="img-stripe" /> */}
            <img src={Avatar} alt="Avatar" className="img-avatar" />
          </Col>
          <Col span={24} className="content" style={{ textAlign: "center" }}>
            <p className="content-title">Non-Instant Quote request</p>
            <p
              className="content-description mb-0"
              style={{
                maxWidth: "571px",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              {contentPara()}
            </p>
            <p className="mb-0" style={{ marginTop: "16px" }}>
              Thank you for considering FSL for your shipping needs.
            </p>
          </Col>
          <Col span={24}>
            <div
              className="Requestbtn-div"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="primary"
                className="request-btn"
                onClick={showModal}
                style={{ cursor: "pointer" }}
              >
                Request Non-Instant Quote
              </Button>
            </div>
            <div
              className="div-rowcentered"
              style={{ marginTop: "20px", justifyContent: "center" }}
            >
              <Button
                type="link"
                // icon={
                //   checkedItems?.NonHarzardousCargo !== false &&
                //   checkedItems?.StackableCargo !== false ? (
                //     <LeftOutlined
                //       style={{
                //         width: "13px",
                //         height: "13px",
                //         marginTop: "8px",
                //       }}
                //     />
                //   ) : (
                //     ""
                //   )
                // }
                onClick={handleClick}
              >
                {ButtonLabel()}
              </Button>
              {/* <div className="go-back">
                  <div>
                    <img
                      src={RightArrow}
                      alt="arrow"
                      className="me-1"
                      style={{
                        width: "18px",
                        height: "18px",
                        cursor: "pointer",
                        color: "#03b2cb",
                      }}
                    />
                  </div>

                  <div onClick={() => setShowReselt(false)}>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        letterSpacing: "1%",
                        color: "#03b2cb",
                        cursor: "pointer",
                      }}
                    >
                      Go Back
                    </span>
                  </div>
                </div> */}
            </div>
          </Col>
        </Row>
      </Card>
      {showModal && (
        <QuoteRequestModal
          showModal={isModalOpen}
          onCancel={handleCancel}
          setShowReselt={setShowReselt}
          
        />
      )}
    </>
  );
}

export default QuoteRequest;
