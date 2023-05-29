import React, { useState } from "react";
// reactstrap components
import { Container, Col, Nav, Card, CardHeader, NavbarBrand } from "reactstrap";
import ClientLeftNavItem from "./ClientLeftNavItem";

function ClientLeftNav({ pills, setPills }) {
  return (
    <>
      <Col
        className="no-padding no-margin"
        style={{
          flexGrow: 1,

          // backgroundColor: "#f5f5f5",
          // very very light blue
          // lighter
          backgroundColor: "#f1f6f8",
          height: "100vh",
          // space between
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          {/* logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // height: "10%",
            }}
          >
            <img
              src={require("assets/img/now-logo.png")}
              style={{ width: "30%" }}
            />

            {/* bank name*/}
            <div 
                style={{
                  textTransform: "uppercase",
                  fontSize: 16,
                  fontWeight: 700,
                  paddingTop: 10,
                }} >
              
                The Morning Bank
            </div>

            {/* horizontal divider */}
            <hr style={{ width: "80%", backgroundColor: "#e8e8e8" }} />
          </div>
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
            <ClientLeftNavItem
              pill="6"
              pills={pills}
              setPills={setPills}
              // icon="now-ui-icons business_money-coins"
              icon="fa fa-money-bill"
              text="Pay Bills"
            />
          </Nav>
        </div>

        {/* loagout button */}
        <Nav className="flex-column" data-tabs="tabs" tabs>
          <ClientLeftNavItem
            pill="10"
            pills={pills}
            setPills={setPills}
            icon="fa fa-sign-out-alt"
            text="Logout"
          />
        </Nav>
      </Col>
    </>
  );
}

export default ClientLeftNav;
