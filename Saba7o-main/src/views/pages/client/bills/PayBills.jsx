import { useState } from "react";

// reactstrap components
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
import Bill from "./Bill";
export default function PayBills({ setBills, bills, accounts }) {
  const [payModal, setPayModal] = useState(false);

  return (
    <>
      <CardBody className="text-dark">
        <Row>
          <Col>
            <CardTitle tag="h4" className="text-left" style={{ margin: 5 }}>
              <b>Pay Bills</b>
            </CardTitle>

            <div style={{ height: 30 }}></div>

            <ListGroup flush>
              <ListGroupItem>
                <Bill />
              </ListGroupItem>

              {/* map the account transactions */}
              {bills.map((bill) => (
                <ListGroupItem>
                  {/* <Transcation transaction={transaction} />{" "} */}
                  <Bill bill={bill} accounts={accounts} />
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
        {/* 30 px space */}
        <div style={{ height: 30 }}></div>
      </CardBody>
    </>
  );
}
