import { useState } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import AccountCard from "./AccountCard";
import CardCard from "./CardCard";

function ClientAccountsCards({ accounts, cards }) {
  return (
    <>
      <CardBody className="text-dark">
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Accounts</b>
            </CardTitle>
          </Col>
          {/* button to add new account */}
          <Col>
            <Button
              color="info"
              style={{
                float: "right",
                margin: 5,
                padding: 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 10,
              }}
            >
              Add New
            </Button>
          </Col>
        </Row>
        {/* accounts */}
        {accounts.map((account) => (
          <AccountCard account={account} />
        ))}

        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* CARDS */}
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Cards</b>
            </CardTitle>
          </Col>
          {/* button to add new account */}
          <Col>
            <Button
              color="info"
              style={{
                float: "right",
                margin: 5,
                padding: 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 10,

              }}
            >
              Add New
            </Button>
          </Col>
        </Row>
        {/* accounts */}
        {cards.map((card) => (
          <CardCard card={card} />
        ))}
      </CardBody>
    </>
  );
}

export default ClientAccountsCards;
