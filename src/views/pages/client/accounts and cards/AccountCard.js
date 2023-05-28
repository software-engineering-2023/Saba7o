import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardOverflow,
  Button,
} from "reactstrap";
import CardField from "./CardField";

// // convert number to EGP format
// function egp(num) {
//     return "EGP " + num.toFixed(2);
// }

let egp = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EGP",
});

function AccountCard({ account }) {
  // a horizontal card that displays the account's number, balance, and type
  return (
    <Card
      style={{ background: "", borderRadius: 10, marginBottom: 10 }}
      className="text-dark text-left"
    >
      <CardBody
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          // round edges
        }}
      >
        {/* blue button at the start with a down arrow */}

        {/* row spacing should be space between */}
        <Row
          style={{
            padding: 10,
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Row>
            <Button
              size="sm"
              color="info"
              style={{
                marginRight: 10,
                marginLeft: 10,
                marginTop: 0,
                marginBottom: 0,
                padding:12,
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
            {/* "Account number" */}
            <CardField title="Account number" value={account.accountNumber} />
          </Row>
          <CardField title="Account Type" value={account.type} />
          <CardField
            title="Current Balance"
            value={egp.format(account.balance)}
          />
          <CardField
            title="Actual Balance"
            value={egp.format(account.actual)}
          />
        </Row>
      </CardBody>
    </Card>
  );
}

export default AccountCard;
