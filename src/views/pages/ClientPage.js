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
      type: "Checking Account",
    },
    {
      id: crypto.randomUUID(),
      accountNumber: "1234567891018",
      actual: 10000,
      balance: 10000,
      type: "Checking Account",
    },
  {
    id: crypto.randomUUID(),
    accountNumber: "1234567891018",
    actual: 10000,
    balance: 10000,
    type: "Checking Account",
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
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "4141123456789123",
      name: "Shady Hani",
      type: "Visa Credit Platinum",
      balance: 10000,
      bill: 3967,
      dueDate: "2024-05-01",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "4141123456789123",
      name: "Shady Hani",
      type: "Visa Credit Platinum",
      balance: 10000,
      bill: 3967,
      dueDate: "2024-05-01",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "4141123456789123",
      name: "Shady Hani",
      type: "Visa Credit Platinum",
      balance: 10000,
      bill: 3967,
      dueDate: "2024-05-01",
    },
  ]);

  function tabContent() {
    switch (pills) {
      case "1":
        return ClientDashboard();
      case "2":
        return ClientTransfer();
      case "4":
        return ClientAccountsCards({ accounts, cards });
    }
  }

  return (
    <>
      <ExamplesNavbar login={false} />
      {/* clear-filter  */}
      <div className="page-header bg-dark" filter-color="blue">
        {/* <Container style={{ paddingBottom: 0 }}>
          <Row>
            <Col>
              <h3 className="text-center">Client Page</h3>
            </Col>
          </Row>
        </Container> */}
        <Container
          style={{ padding: 0, marginTop: 80, marginLeft: 20, marginRight: 20 }}
        >
          <Row style={{ width: 1800 }}>
            {/* a menu occupying the left 1/3 of the screen containing the following:*/}
            <ClientLeftNav pills={pills} setPills={setPills} />
            {/* a main section occupying the right 2/3 of the screen containing data for each of the sections above */}
            <Col style={{ padding: 0 }} md="8">
              <Card
                style={{ height: 650, paddingBottom: 0, overflowY: "scroll" }}
              >
                {tabContent()}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
