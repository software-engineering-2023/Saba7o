import React, { useState } from "react";
// reactstrap components
import {
  Container,
  Col,
  Nav,
  Card,
  CardHeader,
} from "reactstrap";
import ClientLeftNavItem from "./ClientLeftNavItem";

function ClientLeftNav({pills, setPills}) {

  return (
    <>
      <Col md="2" style={{paddingRight:0}}>
        <Card style={{height:650}} >
            <Nav className="flex-column" data-tabs="tabs" tabs>
              <ClientLeftNavItem
                pill="1"
                pills={pills}
                setPills={setPills}
                icon="fa fa-home"
                text="Dashboard"
              />
              <ClientLeftNavItem
                pill="2"
                pills={pills}
                setPills={setPills}
                icon="fa fa-reply"
                text="Transfer"
              />
              <ClientLeftNavItem
                pill="3"
                pills={pills}
                setPills={setPills}
                icon="fa fa-arrow-right"
                text="Transactions"
              />
              <ClientLeftNavItem
                pill="4"
                pills={pills}
                setPills={setPills}
                icon="fa fa-credit-card"
                text="Accounts and Cards"
              />
              <ClientLeftNavItem
                pill="5"
                pills={pills}
                setPills={setPills}
                // icon="now-ui-icons business_money-coins"
                icon="fa fa-piggy-bank"
                text="Loans"
              />
            </Nav>
        </Card>
      </Col>
    </>
  );
}

export default ClientLeftNav;
