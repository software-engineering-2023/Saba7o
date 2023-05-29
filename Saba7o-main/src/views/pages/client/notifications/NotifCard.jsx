import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

function NotifCard({ notif }) {
  return (
    <>
      <Card
        className="card-plain"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: 10,
          padding: 0,
          margin: 0,
        }}
      >
        <CardBody style={{
            paddingTop: 10,
            paddingBottom: 10,
        }}>
          <Row>
            {/* bell icon  */}
            <Col>
              <i className="fa fa-bell" style={{ color: "black" , fontSize:35, padding:0, margin:0}}></i>
            </Col>

            <Col>
              <h6 className="text-left">{notif.title}</h6>
            </Col>
            <Col>
              <h6 className="text-right">{notif.date}</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-left">{notif.content}</p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default NotifCard;
