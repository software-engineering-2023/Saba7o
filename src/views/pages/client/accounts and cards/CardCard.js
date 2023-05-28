import React from "react";
import { Card, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import CardField from "./CardField";

// // convert number to EGP format
// function egp(num) {
//     return "EGP " + num.toFixed(2);
// }

let egp = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EGP",
});

// function to show only the first 4 and last 3 digits of the card number
function cardNum(num) {
  return num.slice(0, 4) + "*********" + num.slice(-3);
}

function CardCard({ card }) {
  return (
    <Card
      style={{ background: "", borderRadius: 10, marginBottom: 10 }}
      className="text-dark text-left"
    >
      <CardBody
        style={{
          paddingTop: 5,
          paddingBottom: 0,
          // round edges
        }}
      >
        {/* row spacing should be space between */}
        <Row style={{ padding: 10, justifyContent: "space-between" }}>
          <Row>
            <Button
              size="sm"
              color="info"
              style={{
                marginRight: 10,
                marginLeft: 10,
                marginTop: 0,
                marginBottom: 0,
                padding: 12,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 10,
              }}
            >
              <i
                className="fa fa-chevron-down fa-2x"
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              />
            </Button>
            <CardField title="Card Number" value={cardNum(card.cardNumber)} />
          </Row>
          <CardField title="Card Holder Name" value={card.name} />
          <CardField title="Card Type" value={card.type} />
          <CardField title="Current Balance" value={egp.format(card.balance)} />
          <CardField title="Bill Amount" value={egp.format(card.bill)} />
          <CardField title="Due Date" value={card.dueDate} />
        </Row>
      </CardBody>
    </Card>
  );
}

export default CardCard;
