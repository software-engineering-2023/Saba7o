import { useState } from "react";
import { egp } from "./AccountCard.js";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import AccountCard from "./AccountCard";
import CardCard from "./CardCard";
import CardField from "./CardField";
import Transcation from "./Transaction.js";

function AccountTransactions({ account, back }) {
  return (
    <>
      <CardBody className="text-dark">
        {/* back button */}

        <Row>
          <Col>
            <Button
              outline
              color="default"
              onClick={back}
              style={{
                // color the button text
                // color: "black",
                // outline color
                borderColor: "white",
                float: "left",
                margin: 5,
                padding: 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 10,
              }}
            >
              <i className="fa fa-arrow-left" />
              {"      Back"}
            </Button>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Account Transactions</b>
            </CardTitle>
          </Col>
        </Row>
        {/* account card */}
        <AccountCard account={account} noBtn />

        {/* 30 px space */}
        <div style={{ height: 30 }}></div>

        {/* transactions */}
        <ListGroup flush>
            <ListGroupItem>
                <Transcation />
            </ListGroupItem>
          {/* map the account transactions */}
          {account.transactions.map((transaction) => (
            <ListGroupItem>
              <Transcation transaction={transaction} />{" "}
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </>
  );
}

export default AccountTransactions;
