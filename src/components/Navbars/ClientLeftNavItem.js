
import React, { useState } from "react";
// reactstrap components
import {
    Row,
    NavItem,
    NavLink,
  } from "reactstrap";

function ClientLeftNavItem({ pill, pills, setPills, icon, text}) {

    return <><NavItem style={{ width: "90%" }}>
    <NavLink
      className={pills === pill ? "active" : ""}
      href=""
      onClick={(e) => {
        e.preventDefault();
        setPills(pill);
      }}
    >
      <Row style={{ paddingLeft: 10 }}>
        <i style={{paddingTop:3}} className={icon}></i>
        <span style={{ paddingLeft: 10 }}>{text}</span>
      </Row>
    </NavLink>
  </NavItem>
  </>
    
}

export default ClientLeftNavItem;