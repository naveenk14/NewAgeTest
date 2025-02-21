import React, { useMemo, useState } from "react";
import "./UploadDocuments.css";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import dropIcon from "../../../../../assets/Frame.png";
import { Button, Tooltip } from "antd";
import info from "../../../../../assets/Info.svg";
import { AiFillMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { uploadDocumentAction } from "../../../../../Redux/Actions/UploadDocumentAction";

const UploadDocuments = () => {
  // const [file, setFile] = useState()
  // const mergedArrow = useMemo(() => {
  //     if (arrow === 'Hide') {
  //       return false;
  //     }
  //     if (arrow === 'Show') {
  //       return true;
  //     }
  //     return {
  //       pointAtCenter: true,
  //     };
  //   }, [arrow]);
  const dispatch = useDispatch();

//   const payload = {
//     image_upload: [
//       {
//         unique_id: file?.uid,
//         file_name: "",
//         file_content: "",
//         file_type: "",
//       },
//     ],
//     user_token: "",
//     ebooking_no: "",
//     ebooking_document: "",
//     sl_no: "",
//   };

  const handleFileUpload = ({ file }) => {
    console.log("uid", file.uid);
    dispatch(
      uploadDocumentAction({
        image_upload: [
          {
            unique_id: file.uid,
            file_name: file.name,
            file_content: "",
            file_type: file.type,
          },
        ],
        user_token: "",
        ebooking_no: "",
        ebooking_document: "",
        sl_no: "",
      })
    );
  };

  return (
    <div className="upload_document_section">
      <div className="row upload_document_row">
        <div className="col-12 p-0">
          <div className="left_details d-flex align-items-start">
            <span className="me-2">2</span>
            <div className="Shipper_title">
              <p className="m-0 mb-2">
                Upload Documents
                <Tooltip
                  className="ms-2"
                  placement="topLeft"
                  title={
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque deserunt tempore non{" "}
                    </p>
                  }
                >
                  <img src={info} />
                </Tooltip>
              </p>
              <p className="m-0">
                Please upload documents related to the cargo
              </p>
            </div>
          </div>
          <div className="right_details">
            <Dragger
              multiple
              customRequest={handleFileUpload}
              // showUploadList={false}
              accept=".jpeg,.png,.word,.pdf"
              style={{ width: "50%" }}
            >
              <p className="ant-upload-drag-icon">
                <img src={dropIcon} alt="" />
              </p>
              <p className="ant-upload-text">
                Drag & Drop anywhere in this area or{" "}
                <Link className="text-decoration-none">Click Here</Link>
              </p>
              <p className="ant-upload-hint">
                File formats: PDF, JPEG, Word, PNG (Max file size: 2 MB).
              </p>
            </Dragger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
