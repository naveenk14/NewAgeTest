import React, { useState, useEffect } from "react";
import { Button, Card, Checkbox, Popover, Image, Input } from "antd";
import "./FindNewRate.css";
import ShipmentTracker from "./ShipmentTracker";
import info from "../../../../../assets/Info.svg";
import { Tooltip } from "antd";
import { Collapse } from "antd";
// import { DownOutlined, UpOutlined } from "@ant-design/icons";
import CargoPickupPopOver from "./CargoPickupPopOver";
import CargoDeliveryPopOver from "./CargoDeliveryPopOver";
import pencil from "../../../../../assets/Pencil.svg";
import img from "../../../../../assets/thumbsgr.svg";
import uparrow from "../../../../../assets/uparrowcargo.svg";
import CargoInsurance from "./CargoInsurance";
// import CargoInsurance from "./CargoInsurance";

function FindNewRate({
  selectedCurrency,
  setSelectedCurrency,
  checkedItems,
  setCheckedItems,
  showHeader,
  setShowReselt,
  exim,
  selectedValue,
  setSelectedValue,
  selectedDeliveryValue,
  setSelectedDeliveryValue,
  insuranceValue,
  setInsuranceValue,
  selectedCode,
  setSelectedCode,
  selectedCode1,
  setSelectedCode1,
  originPort,
  destPort,
  settoscheck,
  toscheck,
  dest,
  origin,
}) {
  console.log(selectedValue);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isDeliveryPopoverOpen, setDeliveryPopoverOpen] = useState(false);
  const [isInsurance, setInsurance] = useState(false);
  // const [insuranceValue, setInsuranceValue] = useState("");
  // console.log("insure",insuranceValue);

  // const [selectedValue, setSelectedValue] = useState("");
  // const [selectedDeliveryValue, setSelectedDeliveryValue] = useState("");

  const onChange = (e) => {
    settoscheck(true);
    const { name, checked } = e.target;
    setCheckedItems((prevItems) => {
      const updatedItems = { ...prevItems, [name]: checked };

      if (name === "CargoDelivery" && !checked) {
        setSelectedDeliveryValue("");
      } else if (name === "cargoPickup" && !checked) {
        setSelectedValue("");
      }

      // if(name == "originCharges" && !checked ){
      //   if(updatedItems.CargoDelivery){
      //     updatedItems.cargoPickup = false
      //   }
      // }
      // if(name == "DestinationCharges" && !checked ){
      //   if(updatedItems.CargoDelivery){
      //     updatedItems.CargoDelivery = false
      //   }
      // }

      return updatedItems;
    });

    if (name === "cargoPickup") {
      setPopoverOpen(checked);
    }
    if (name === "CargoDelivery") {
      setDeliveryPopoverOpen(checked);
    }
    if (name === "CargoInsurance") {
      setInsurance(checked);
    }
  };
  const handleValue = (value) => {
    if (value === "cargoPickup") {
      return selectedValue;
    } else if (value === "CargoDelivery") {
      return selectedDeliveryValue;
    } else if (value === "CargoInsurance") {
      return insuranceValue;
    }
  };

  const [editiconClickedIns, setediticonClickedIns] = useState(false);
  useEffect(() => {
    if (!isInsurance && editiconClickedIns) {
      setediticonClickedIns(false);
    }
  }, [isInsurance]);
  const getPopoverContent = (value) => {
    if (value === "cargoPickup") {
      return (
        <CargoPickupPopOver
          setSelectedValue={setSelectedValue}
          setPopoverOpen={setPopoverOpen}
          selectedCode={selectedCode}
          setSelectedCode={setSelectedCode}
          originPort={originPort}
          destPort={destPort}
        />
      );
    } else if (value === "CargoDelivery") {
      return (
        <CargoDeliveryPopOver
          setSelectedValue={setSelectedDeliveryValue}
          setPopoverOpen={setDeliveryPopoverOpen}
          selectedCode1={selectedCode1}
          setSelectedCode1={setSelectedCode1}
          destPort={destPort}
        />
      );
    } else if (value === "CargoInsurance") {
      return (
        <CargoInsurance
          insuranceValue={insuranceValue}
          setInsuranceValue={setInsuranceValue}
          setInsurance={setInsurance}
          editiconClickedIns={editiconClickedIns}
          setediticonClickedIns={setediticonClickedIns}
          isInsurance={isInsurance}
        />
      );
    }
    return null;
  };
  const getPopoverOpen = (value) => {
    if (value === "cargoPickup") {
      return isPopoverOpen;
    } else if (value === "CargoDelivery") {
      return isDeliveryPopoverOpen;
    } else if (value === "CargoInsurance") {
      return isInsurance;
    }
    return false;
  };
  const onChangeCollapse = (key) => {
    console.log(key);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FilterCheckbox = ({
    label,
    tooltipText,
    onChange,
    value,
    checked,
    children,
    vname,
    disabled,
    defaultChecked,
  }) => {
    console.log(value);
    const handlePopoverOpenChange = (value) => {
      if (value === "cargoPickup") {
        return setPopoverOpen;
      } else if (value === "CargoDelivery") {
        return setDeliveryPopoverOpen;
      } else if (value === "CargoInsurance") {
        return setInsurance;
      }
      return () => {};
    };

    return (
      <div className="filter-quotation">
        {(value === "cargoPickup" ||
          value === "CargoDelivery" ||
          value === "CargoInsurance") &&
          checked &&
          (isPopoverOpen || isDeliveryPopoverOpen || isInsurance) && (
            <>
              <div className="dimmed-background"></div>
            </>
          )}
        <div className="filter-quotation-wrapper">
          <div className="singlefilter-leftstyling">
            <div className="div-rowcentered">
              <Checkbox
                onChange={onChange}
                value={value}
                checked={checked}
                name={vname}
                disabled={disabled}
                defaultChecked={defaultChecked}
              >
                {label}
                {children}
              </Checkbox>
            </div>
            <div
              className="div-rowcentered"
              style={{ justifyContent: "flex-start" }}
            >
              <Tooltip
                trigger={"hover"}
                placement="topLeft"
                title={tooltipText}
              >
                <span style={{ float: "right" }} role="button">
                  <img src={info} alt="more" />
                </span>
              </Tooltip>
            </div>
          </div>
          {(value === "cargoPickup" ||
            value === "CargoDelivery" ||
            value === "CargoInsurance") &&
            checked && (
              <div
                className="div-rowcentered justify-atstart displaycheckbox-value"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {!isPopoverOpen && !isDeliveryPopoverOpen && !isInsurance && (
                  <h6
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "18px",
                      letterSpacing: "1%",
                      color: "#384656",
                      marginBottom: "0px",
                    }}
                  >
                    {value === "CargoInsurance"
                      ? "Goods value in USD"
                      : "ZIP Code"}{" "}
                    :&nbsp;&nbsp;
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "13px",
                        lineHeight: "19px",
                        color: "#384656",
                        letterSpacing: "1%",
                      }}
                    >
                      {handleValue(value)}
                      {/* {value === "cargoPickup"
                        ? selectedValue
                        : selectedDeliveryValue} */}
                    </span>
                  </h6>
                )}
                <Popover
                  placement="bottom"
                  content={getPopoverContent(value)}
                  open={getPopoverOpen(value)}
                  onOpenChange={handlePopoverOpenChange(value)}
                  trigger="click"
                >
                  <Button
                    type="link"
                    className={`editpencil-btn ${
                      (selectedValue ||
                        selectedDeliveryValue ||
                        insuranceValue) &&
                      !isPopoverOpen &&
                      !isDeliveryPopoverOpen &&
                      !isInsurance
                        ? "ms-auto"
                        : ""
                    }`}
                    style={{
                      position: "relative",
                      width: "20.6px",
                      height: "32px",
                      bordeRadius: "6px",
                      padding: "1px",
                    }}
                    onClick={() => {
                      if (value === "cargoPickup") {
                        setPopoverOpen(true);
                      } else if (value === "CargoDelivery") {
                        setDeliveryPopoverOpen(true);
                      } else if (value === "CargoInsurance") {
                        setInsurance(true);
                        setediticonClickedIns(true);
                      }
                    }}
                  >
                    <Image src={pencil} alt="pencil" preview={false} />
                  </Button>
                </Popover>
              </div>
            )}
        </div>
      </div>
    );
  };

  const item1 = [
    {
      key: "1",
      label: "Origin",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Origin Charges"
              vname="originCharges"
              checked={checkedItems?.originCharges}
              value="originCharges"
              tooltipText="This includes Origin documentation, Port/Airport handling."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Export Clearance"
              checked={checkedItems?.exportClearance}
              value="exportClearance"
              vname="exportClearance"
              tooltipText="Charges for filing with Export customs."
              onChange={onChange}
            >
              <span>
                <Tooltip trigger={"hover"} title={"Recommended"}>
                  <img src={img} alt="icon" className="ms-2 mb-1" />
                </Tooltip>
              </span>
            </FilterCheckbox>
            <FilterCheckbox
              label="Cargo Pickup"
              checked={checkedItems?.cargoPickup}
              value="cargoPickup"
              vname="cargoPickup"
              tooltipText="Transportation from factory/warehouse to Port/Airport."
              onChange={onChange}
            />
            <FilterCheckbox
              label="International Freight"
              value="internationalFreight"
              vname="internationalFreight"
              // checked={checkedItems.internationalFreight}
              tooltipText="Transportation from Origin port to Destination port."
              onChange={onChange}
              defaultChecked={true}
              disabled={true}
            />
          </div>
        </>
      ),
    },
  ];
  const item2 = [
    {
      key: "1",
      label: "Destination",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Destination Charges"
              checked={checkedItems?.DestinationCharges}
              value="DestinationCharges"
              vname="DestinationCharges"
              tooltipText="This includes destination documentation, Port/Airport handling."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Import Clearance"
              checked={checkedItems?.ImportClearance}
              value="ImportClearance"
              vname="ImportClearance"
              tooltipText="Charges only for Import clearance, duties and taxes will be billed as per receipt."
              onChange={onChange}
            >
              <span>
                <Tooltip trigger={"hover"} title={"Recommended"}>
                  <img src={img} alt="icon" className="ms-2 mb-1" />
                </Tooltip>
              </span>
            </FilterCheckbox>
            <FilterCheckbox
              label="Cargo Delivery"
              checked={checkedItems?.CargoDelivery}
              value="CargoDelivery"
              vname="CargoDelivery"
              tooltipText="Transportation from Port/Airport to Factory/Warehouse."
              onChange={onChange}
            />
          </div>
        </>
      ),
    },
  ];
  const item3 = [
    {
      key: "1",
      label: "Value Added",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Cargo Insurance"
              checked={checkedItems?.CargoInsurance}
              value="CargoInsurance"
              vname="CargoInsurance"
              tooltipText="Insurance that generally protects shipments from loss, damage, or theft while in transit. The cargo insurance coverage includes events mentioned in the policy like vehicle accidents, cargo renunciation, damage due to natural calamities, acts of war, piracy, etc."
              onChange={onChange}
            >
              <span>
                <Tooltip trigger={"hover"} title={"Recommended"}>
                  <img src={img} alt="icon" className="ms-2 mb-1" />
                </Tooltip>
              </span>
            </FilterCheckbox>
          </div>
        </>
      ),
    },
  ];
  const item4 = [
    {
      key: "1",
      label: "Cargo Type",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Stackable Cargo"
              checked={checkedItems?.StackableCargo}
              value="StackableCargo"
              vname="StackableCargo"
              tooltipText="Cargo will be stacked. If your cargo is non-stackable rates will change."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Non Harzardous Cargo"
              checked={checkedItems?.NonHarzardousCargo}
              value="NonHarzardousCargo"
              vname="NonHarzardousCargo"
              tooltipText="Cargo should not have any hazardous substances. Cargo is not corrosive, toxic, flammable, or reactive and does not require a warning label."
              onChange={onChange}
            />
          </div>
        </>
      ),
    },
  ];

  const customExpandIcon = ({ isActive }) =>
    isActive ? (
      <Image src={uparrow} alt="arrow" preview={false} />
    ) : (
      <Image
        src={uparrow}
        alt="arrow"
        preview={false}
        style={{ transform: "rotate(180deg)" }}
      />
    );

  return (
    <div className="quotationresult-div">
      <div className={`quotationresult-leftdiv`}>
        <div className={`${showHeader ? "" : "fixed"}`}>
          <Card title="Service Included" style={{ overflowX: "auto" }}>
            <div className="Service-card">
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item1}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item2}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item3}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item4}
                style={{ borderBottom: "1px solid#F3F5F7" }}
              />
            </div>
          </Card>
        </div>
      </div>
      <div
        className={`quotationresult-rightdiv ${showHeader ? "" : "fixedleft"}`}
        style={{ flex: "1 1 auto" }}
      >
        <ShipmentTracker
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          selectedValue={selectedValue}
          checkedItems={checkedItems}
          setShowReselt={setShowReselt}
          exim={exim}
          setCheckedItems={setCheckedItems}
          selectedDeliveryValue={selectedDeliveryValue}
          originPort={originPort}
          destPort={destPort}
          settoscheck={settoscheck}
          toscheck={toscheck}
          origin={origin}
          dest={dest}
        />
      </div>
    </div>
  );
}

export default FindNewRate;
