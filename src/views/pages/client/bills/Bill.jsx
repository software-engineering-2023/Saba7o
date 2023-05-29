import React from "react";
import { egp } from "../accounts and cards/AccountCard";

import { Button, CardTitle, Row } from "reactstrap";

import CardField from "../accounts and cards/CardField";
import { duration } from "moment";

function Bill({ bill }) {
  var ratio = "16%"
  return (
    <Row
      style={{
        justifyContent: "space-between",
      }}
    >
      {bill === undefined ? (
        <>
          <div style={{ width: ratio }}>
            <CardField
              title={"Bill Number"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <div style={{ width: ratio }}>
            <CardField
              title={"Type"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={"Amount"}
              value={""}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <CardField
            title={"Bill Due Date"}
            value={""}
            alignLeft
            style={{ display: "flex", flexDirection: "column", width: ratio }}
          />
          <CardField
            title={"Pay"}
            value={""}
            alignLeft
            style={{ display: "flex", flexDirection: "column", width: ratio }}
          />
        </>
      ) : (
        <>
          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={bill.billNumber}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={bill.type}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>

          <div style={{ width: ratio }}>
            <CardField
              title={""}
              value={egp.format(bill.amount)}
              alignLeft
              style={{ display: "flex", flexDirection: "column" }}
            />
          </div>
          <CardField
            title={""}
            value={bill.dueDate}
            alignLeft
            style={{ display: "flex", flexDirection: "column", width: ratio }}
          />
          {/* buton to pay */}
            <Button color="info"
            style={{ display: "flex", flexDirection: "column", width: ratio }}
            >
                Pay
            </Button>


        </>
      )}
    </Row>
  );
}

export default Bill;
