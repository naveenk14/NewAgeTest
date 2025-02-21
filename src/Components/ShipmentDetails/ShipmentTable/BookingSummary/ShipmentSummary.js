import React, { useEffect, useState } from "react";
import "./ShipmentSummary.css";
import { Tooltip } from "antd";
import Modal from "../Modal/Modal";
import ContainerDetailsModal from "../Modal/ContainerDetailsModal";
import TextArea from "antd/es/input/TextArea";
import { useSelector } from "react-redux";

const ShipmentSummary = () => {
  const bookingData = useSelector((state) => state.ViewBooking);
  console.log("bookingData", bookingData);
  const ViewBooking = bookingData?.viewBookingData?.customercode;
  console.log("ShipmentSummary", ViewBooking);

  const conatinerno =
    bookingData?.viewBookingData?.customercode[0]?.container_no;
  const conatiner_array = conatinerno?.split(",");

  const requirementDescription =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, labore facere nisi a placeat impedit aliquam unde. Ab fugiat consequuntur aperiam error? Veritatis dolor aliquid nihil perspiciatis cumque sed nulla quidem quisquam iure sit quibusdam mollitia quis, deleniti eius tempore asperiores fugiat nam key at omnis hic. Libero ipsum officiis exercitationem atque quidem asperiores voluptatum accusantium impedit. Dignissimos saepe mollitia earum, numquam, id doloremque velit obcaecati rem molestias praesentium, aspernatur nostrum temporibus dolor neque! Deserunt aspernatur, architecto recusandae id consequatur cumque enim numquam aliquam hic beatae natus autem placeat dignissimos blanditiis modi harum debitis consectetur perferendis similique, perspiciatis laborum. Inventore.";

  const totalWeight = "500000000010 KG";
  const totalVolume = "1023.45698 CBM";
  const totalValue = "$ 100000000000";
  const packageType = "$ 100000000000";
  const NoofUnits = "$ 100000000000";
  const CargoType = "General Cargo";
  const Commodityname = "-";
  const Hscode = "-";
  const NoofContainers = "$ 100000000000";
  const PartiesShipper =
    "ABC Enterprices the value of aim at create an automatedgi";
  const PartiesConsignee =
    "ABC Enterprices the value of aim at create an automatedgi";
  const PartiesNotify =
    "ABC Enterprices the value of aim at create an automatedgi";
  const PartiesBilling =
    "ABC Enterprices the value of aim at create an automatedgi";
  const containerLists = [
    {
      key: 1,
      container: "TRHU3324147 / 20 GP",
    },
    {
      key: 2,
      container: "TRHU3324147 / 21 GP",
    },
    {
      key: 3,
      container: "TRHU3324147 / 22 GP",
    },
    {
      key: 4,
      container: "TRHU3324147 / 23 GP",
    },
    {
      key: 5,
      container: "TRHU3324147 / 24 GP",
    },
    {
      key: 6,
      container: "TRHU3324147 / 26 GP",
    },
    {
      key: 7,
      container: "TRHU3324147 / 27 GP",
    },
    {
      key: 8,
      container: "TRHU3324147 / 28 GP",
    },
    {
      key: 9,
      container: "TRHU3324147 / 29 GP",
    },
    {
      key: 10,
      container: "TRHU3324147 / 30 GP",
    },
    {
      key: 11,
      container: "TRHU3324147 / 31 GP",
    },
    {
      key: 12,
      container: "TRHU3324147 / 32 GP",
    },
    {
      key: 13,
      container: "TRHU3324147 / 33 GP",
    },
  ];

  // const getOptions = (array, key) => {
  //   if (!Array.isArray(array) || !array?.length) {
  //     return [];
  //   }
  //   return Array.from(new Set(array.map((data) => data[key]))).map((value,index) => ({
  //     key: index+1,
  //     value,
  //   }));
  // };

  // console.log(getOptions(conatiner_array,"conatiner"))
  const newContainerArray =
    conatiner_array?.map((value, index) => {
      return { key: index + 1, container: value };
    }) || [];

  console.log(newContainerArray);

  const MinContainer = newContainerArray?.filter((item) => item.key <= 4);
  console.log(MinContainer);
  const MoreContainer = newContainerArray?.filter((item) => item.key > 4);
  console.log(MoreContainer);

  //container_details_modal
  const [openContmodal, setOpenContmodal] = useState(false);
  const handleContOpen = () => {
    setOpenContmodal(true);
  };
  const handleContClose = () => {
    setOpenContmodal(false);
  };

  //This is for decrease count logic of text area
  const [textCount, setTextCount] = useState(1000);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    const length = Math.abs(textInput?.length - 1000);
    setTextCount(length);
  }, [textInput]);

  return (
    <div className="container-fluid booking_summary">
      {/* {ViewBooking?.map((item) => { */}
      {/* return ( */}
      <div className="row mx-0">
        <div className="col-6 mb-3">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Cargo Details</p>
            </div>
            <div className="card-body">
              <div className="row  mx-0">
                <div className="col">
                  <p className="row_head">Total Weight</p>

                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item.total_weight?.length <= 12 ? (
                          item.total_weight
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={totalWeight}
                          >
                            <span role="button">
                              {item?.total_weight
                                ?.slice(0, 13)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">
                  <p className="row_head">Total Volume</p>

                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item.total_volume?.length <= 12 ? (
                          item.total_volume
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            style={{ zIndex: "9999" }}
                            title={item.total_volume}
                          >
                            <span role="button">
                              {item?.total_volume
                                ?.slice(0, 13)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">
                  <p className="row_head">Package Type</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.package_type.length <= 15 ? (
                          item?.package_type
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            title={item?.package_type}
                          >
                            <span role="button">
                              {item?.package_type
                                ?.slice(0, 16)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                  {/* <p className="row_head">Value</p>
                      {ViewBooking?.map((item) => {
                        return (
                          <p className="row_head2">
                            {item?.value?.length <= 12 ? (
                              item?.value
                            ) : (
                              <Tooltip placement="topLeft" zIndex={9999} title={item?.value}>
                                <span role="button">
                                  {item?.value?.slice(0, 13)
                                    .trim()
                                    .split("")
                                    .join("") + "..."}
                                </span>
                              </Tooltip>
                            )}
                          </p>
                        );
                      })} */}
                </div>
              </div>
              <div className="row  mx-0">
                <div className="col">
                  <p className="row_head">No of Units</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.no_of_units?.length <= 12 ? (
                          item?.no_of_units
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            title={item?.no_of_units}
                          >
                            <span role="button">
                              {item?.no_of_units
                                ?.slice(0, 13)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">
                  {/* <p className="row_head">No of Units</p>
                      {ViewBooking?.map((item) => {
                        return (
                          <p className="row_head2">
                            {item?.no_of_units?.length <= 12 ? (
                              item?.no_of_units
                            ) : (
                              <Tooltip
                                placement="topLeft"
                                title={item?.no_of_units}
                              >
                                <span role="button">
                                  {item?.no_of_units
                                    .slice(0, 13)
                                    .trim()
                                    .split("")
                                    .join("") + "..."}
                                </span>
                              </Tooltip>
                            )}
                          </p>)
                      })} */}
                </div>
                <div className="col">
                  {/* <p className="row_head">Stackable Cargo</p>
                      <p className="row_head2">Yes</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 mb-3">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Shipment Details</p>
            </div>
            <div className="card-body">
              <div className="row  mx-0">
                <div className="col">
                  <p className="row_head">Cargo Type</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.cargo_type?.length <= 15 ? (
                          item?.cargo_type
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={item?.cargo_type}
                          >
                            <span role="button">
                              {item?.cargo_type
                                ?.slice(0, 16)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">
                  <p className="row_head">Cargo Ready Date</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.cargo_ready_date?.length <= 15 ? (
                          item?.cargo_ready_date
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            title={item?.cargo_ready_date}
                          >
                            <span role="button">
                              {item?.cargo_ready_date
                                ?.slice(0, 16)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}{" "}
                
                  {/* <p className="row_head">Commodity Name</p>
                      {ViewBooking?.map((item) => {
                        return (
                          <p className="row_head2">
                            {item?.commodity_name?.length <= 15 ? (
                              item?.commodity_name
                            ) : (
                              <Tooltip placement="topLeft" zIndex={9999} title={item?.commodity_name}>
                                <span role="button">
                                  {item?.commodity_name?.slice(0, 16)
                                    ?.trim()
                                    ?.split("")
                                    ?.join("") + "..."}
                                </span>
                              </Tooltip>
                            )}
                          </p>)
                        })} */}
                  {/*                  
                  {
                    ViewBooking?.map((item)=>{
                      return   <p className='row_head2'>{item.commodity_name.length<=15?item.commodity_name:
                        <Tooltip placement="topLeft" title={item.commodity_name} >
                          <span role='button'>
                            {item.commodity_name.slice(0, 16).trim().split("").join("") + "..."}
                          </span>
                        </Tooltip>}</p>

                    }) 
                  } */}
                </div>
                <div className="col">
                <p className="row_head">Hs Code</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.hs_code?.length <= 12 ? (
                          item?.hs_code
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={item?.hs_code}
                          >
                            <span role="button">
                              {item?.hs_code
                                ?.slice(0, 13)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="row  mx-0">
                <div className="col">
                <p className="row_head">No of Containers</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.no_of_containers?.length <= 40 ? (
                          item?.no_of_containers
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={item?.no_of_containers}
                          >
                            <span role="button">
                              {item?.no_of_containers
                                ?.slice(0, 41)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">
                <p className="row_head">Container Number</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.container_no?.length <= 40 ? (
                          item?.container_no
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={item?.container_no}
                          >
                            <span role="button">
                              {item?.container_no
                                ?.slice(0, 41)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
      {ViewBooking?.map((item) => {
        return (
          <div className="row mt-3  mx-0 Parties_row">
            <div className="col-6 mb-3">
              <div className="card h-100">
                <div className="card-header">
                  <p className="Header">Parties</p>
                </div>
                <div className="card-body card_body">
                  <div className="d-flex">
                    <p className="parties_head">Shipper</p>
                    <p className="parties_enterprise">
                      {item?.shipper_name.length <= 56 ? (
                        item?.shipper_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.shipper_name}
                        >
                          <span role="button">
                            {item?.shipper_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="parties_head">Consignee</p>
                    <p className="parties_enterprise">
                      {item?.consignee_name.length <= 56 ? (
                        item?.consignee_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.consignee_name}
                        >
                          <span role="button">
                            {item?.consignee_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="parties_head">Notify</p>
                    <p className="parties_enterprise">
                      {item?.notify_name?.length <= 56 ? (
                        item?.notify_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.notify_name}
                        >
                          <span role="button">
                            {item?.notify_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="parties_head">Billing</p>
                    <p className="parties_enterprise">
                      {item?.billing_party_name?.length <= 56 ? (
                        item?.billing_party_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.billing_party_name}
                        >
                          <span role="button">
                            {item?.billing_party_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="card h-100">
                <div className="card-header">
                  <p className="Header">Value Added Services</p>
                </div>
                <div className="card-body">
                  <div className="row  mx-0">
                    <div className="col">
                      <p className="row_head">Import Clearance</p>
                      <p className="row_head2">
                        {
                          item?.import_clearance ? (
                            item?.import_clearance
                           ):"No"
                        }
                      </p>
                    </div>
                    <div className="col">
                      <p className="row_head">Cargo Pickup</p>
                      <p className="row_head2">
                      {
                          item?.cargo_pickup ? (
                            item?.cargo_pickup
                           ):"No"
                        }
                      </p>
                    </div>
                    <div className="col">
                      <p className="row_head">Cargo Insurance</p>
                      <p className="row_head2">
                        {
                          item?.cargo_insurance ? (
                            item?.cargo_insurance
                           ):"No"
                        }
                      </p>
                    </div>
                  </div>
                  <div className="row  mx-0">
                    <div className="col">
                      <p className="row_head">Export Clearance</p>
                      <p className="row_head2">
                        {
                          item?.is_export_clearance ? (
                            item?.is_export_clearance
                           ):"No"
                        }
                      </p>
                    </div>
                    <div className="col">
                      <p className="row_head">Door Delivery</p>
                      <p className="row_head2">
                        {
                          item?.door_delivery ? (
                            item?.door_delivery
                           ):"No"
                        }
                      </p>
                    </div>
                    <div className="col">
                      {/* <p className="row_head">Door Delivery</p>
                      <p className="row_head2">
                        {
                          item?.door_delivery ? (
                            item?.door_delivery
                           ):"No"
                        }
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="row mt-3 mx-0">
        <div className="col">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Commodity Name</p>
            </div>
            <div className="card-body" style={{ height: "160px" }}>
            {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.commodity_name?.length <= 150 ? (
                          item?.commodity_name
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={item?.commodity_name}
                          >
                            <span role="button">
                              {item?.commodity_name
                                ?.slice(0, 149)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
              {/* {newContainerArray?.length <= 4 ? (
                <>
                  {newContainerArray?.map((item, i) => {
                    return (
                      <p key={i} className="container_para">
                        {item.container}
                      </p>
                    );
                  })}
                </>
              ) : (
                <>
                  {MinContainer?.map((item, i) => (
                    <p key={i} className="container_extrapara">
                      {item.container}
                    </p>
                  ))}
                  <span
                    role="button"
                    style={{ color: "#00c4ff" }}
                    className="container_extrapara"
                    onClick={() => handleContOpen()}
                  >
                    Show more...
                  </span>
                </>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mx-0">
        <div className="col">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Special Requirements</p>
            </div>
            <div className="card-body">
              {/* {  
                  <p className='container_para'>{requirementDescription}</p>
              } */}

              <div
                className="requirement_section"
                style={{ padding: "0px 13px" }}
              >
                <div className="textarea_description d-flex justify-content-end">
                  {/* <p
                    className=""
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: "1%",
                      color: "#67788E",
                      marginBottom: "5px",
                    }}
                  >
                    Tell us more about your requirements
                  </p> */}
                  <p
                    className="m-0"
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: "1%",
                      color: "#67788E",
                    }}
                  >
                    {textCount}/1000
                  </p>
                </div>
                <TextArea
                  rows={4}
                  maxLength={1000}
                  readOnly
                  onChange={(e) => setTextInput(e.target.value)}
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={openContmodal} width={"703px"}>
        <ContainerDetailsModal
          children={MoreContainer}
          handleContClose={handleContClose}
        />
      </Modal>
    </div>
  );
};

export default ShipmentSummary;
