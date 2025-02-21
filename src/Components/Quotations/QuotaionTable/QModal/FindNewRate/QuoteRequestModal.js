import React from "react";
import { Col, Modal, Row, Image, Button } from "antd";
import "./FindNewRate.css";
// import { useNavigate } from "react-router-dom";

function QuoteRequestModal({ showModal, onCancel, setShowReselt }) {
  // const navigate= useNavigate()
  const handleNAv = () => {
    setShowReselt(false);
    // onCancel();
  };
  return (
    <Modal
      open={showModal}
      onCancel={onCancel}
      footer={null}
      centered
      className="quote-request"
    >
      <Row justify="center" align="middle">
        <Col>
          <Image
            src="https://www.fslgo.com/_next/static/media/credit-applied-successfully.1e2caabf.gif"
            alt="check"
            width={150}
            height={150}
          />
        </Col>
        <Col>
          <Row
            gutter={[0, 24]}
            style={{ maxWidth: "500px", textAlign: "center" }}
            justify="center"
          >
            <Col span={24}>
              <div className="booking-modal-header request-modal">
                We have received your Quote request
              </div>
              <div className="text-gray request-modal-p">
                Lorium ipsume is simplly dummy text that will go here. This is
                just for reference we need 2 lines of subtext here.
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={16} justify="center">
                <Col>
                  <Button style={{ marginTop: "20px" }} onClick={onCancel}>
                    Search Another Cargo
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={{ marginTop: "20px" }}
                    type="primary"
                    danger
                    onClick={handleNAv}
                  >
                    Go to Quotation
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
}

export default QuoteRequestModal;
