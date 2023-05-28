import { useState } from "react";

// reactstrap components
import {
  Container,
  Col,
  Row,
  NavItem,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  Table,
  Label,
  Input,
  UncontrolledTooltip,
  Form,
  TabContent,
  TabPane,
  NavbarBrand,
  UncontrolledCollapse,
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

// css for this page
import "../../assets/css/now-ui-kit.css";

import ExamplesNavbar from "components/Navbars/Navbar.js";
import ClientLeftNav from "components/Navbars/ClientLeftNav.js";
import ClientDashboard from "./client/Dashboard.js";
import ClientTransfer from "./client/Transfer.js";
import ClientAccountsCards from "./client/accounts and cards/AccountsCards";

export default function ClientPage() {
  const [login, setLogin] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pills, setPills] = useState("1");
  const [accounts, setAccounts] = useState([
    {
      id: crypto.randomUUID(),
      accountNumber: "1234567891018",
      actual: 10000,
      balance: 10000,
      type: "Checking Accountttt",
      transactions: [
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -1000,
          description: "Salary",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -3500,
          description: "Purchase from Amazon",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: +5000,
          description: "Transfer from Shady Hani",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      accountNumber: "1234567891018",
      actual: 10000,
      balance: 10000,
      type: "Checking Account",
      transactions: [
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: 1000,
          description: "Salary",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      accountNumber: "1234567891018",
      actual: 10000,
      balance: 10000,
      type: "Checking Account",
      transactions: [
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: 1000,
          description: "Salary",
        },
      ],
    },
  ]);

  const [cards, setCards] = useState([
    {
      id: crypto.randomUUID(),
      cardNumber: "4141123456789123",
      name: "Shady Hani",
      type: "Visa Credit Platinum",
      balance: 10000,
      bill: 3967,
      dueDate: "2024-05-01",
      points:99999,
      transactions: [
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -1000,
          description: "Salary",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -3500,
          description: "Purchase from Amazon",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -5000,
          description: "Transfer from Shady Hani",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "4141123456789123",
      name: "Shady Hani",
      type: "Visa Credit Platinum",
      balance: 10000,
      bill: 3967,
      dueDate: "2024-05-01",
      points:88888,

      transactions: [],
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "4141123456789123",
      name: "Shady Hani",
      type: "Visa Credit Platinum",
      balance: 10000,
      bill: 3967,
      dueDate: "2024-05-01",
      points:77777,

      transactions: [
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -1000,
          description: "Salary",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -3500,
          description: "Purchase from Amazon",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: +5000,
          description: "Transfer from Hani Shady",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "4141123456789123",
      name: "Shady Hani",
      type: "Visa Credit Platinum",
      balance: 10000,
      points:66666,
      bill: 3967,
      dueDate: "2024-05-01",
      transactions: [
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -1000,
          description: "Water Bill",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: -3500,
          description: "Purchase from Ebay",
        },
        {
          id: crypto.randomUUID(),
          date: "2021-05-01",
          amount: +5000,
          description: "Transfer from GUC",
        },
      ],
    },
  ]);

  // in the AccountsCards tab, the user can click on an account or card. When they do so, we need to change the tab to the corresponding tab containing the relevant transactions
  // this function is passed to the AccountsCards component and is called when the user clicks on an account or card
  const changeTab = (tab) => {
    setPills(tab);
  };

  const tabs = {
    1: ClientDashboard(),
    2: ClientTransfer(),
    4: ClientAccountsCards({ accounts, cards, changeTab }),
  };

  function tabContent() {
    return tabs[pills];
  }

  return (
    <>
      {/* <ExamplesNavbar login={false} /> */}
      {/* clear-filter  */}
      <div style={{ display: "flex" }}>
        {/* a menu occupying the left 1/3 of the screen containing the following:*/}
        <ClientLeftNav pills={pills} setPills={setPills} />

        {/* vertical divider */}
        {/* <div
          style={{
            borderLeft: "3px solid #e8e8e8",
            // height: "100%",
          }}
        ></div> */}

        {/* a main section occupying the right 2/3 of the screen containing data for each of the sections above */}
        <Col style={{ flexGrow: 4, overflowY: "scroll" }} className="no-margin no-padding">
          {tabContent()}
        </Col>
        {/* </Row> */}
        {/* </Container> */}
      </div>
    </>
  );
}
