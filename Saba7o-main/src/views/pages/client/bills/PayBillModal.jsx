import React, { useState } from "react";
// import { egp } from "./AccountCard";

// reactstrap components
import {
  CardTitle,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Card,
  CardBody,
  Button,
} from "reactstrap";
// import { min } from "moment";

function PayBillModal({ modal, setModal, accounts, bill, payBill }) {
  // mini modal
  const [miniModal, setMiniModal] = useState(false);
  // alert
  const [alert, setAlert] = useState("");

  // states for the form
  //   const [pointsInput, setPointsInput] = useState(points);
  const [accountChosen, setAccountChosen] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <>
       
    </>
  );

  function onFormSubmit(e) {
    e.preventDefault();
    // get the form data
    // check that the user chose an account type
    console.log(accountChosen);
    if (accountChosen === "" || accountChosen === "Choose...") {
      setAlert("Please choose an account to redeem the cashback to");
      return;
    }

    // check if he agreed to the terms
    if (!agreed) {
      setAlert("Please agree to the terms");
      return;
    }

    // // check if the user has enough points
    // if (pointsInput > points) {
    //   setAlert("You don't have enough points");
    //   return;
    // }
    // deduct the points from the user's card, and add the cashback to the account, and make a transaction for the cashback in the account
    // deduct the points from the user's card
    // setCards(
    //   cards.map((card) => {
    //     if (card.id === selectedCard.id) {
    //       card.points -= pointsInput;
    //     }
    //     return card;
    //   })
    // );

    // add the cashback to the account
    // setAccounts(
    //   accounts.map((acc) => {
    //     if (acc.id === accountChosen) {
    //       acc.balance += parseFloat((pointsInput * 0.05).toFixed(2));
    //       acc.transactions.push({
    //         id: crypto.randomUUID(),
    //         // todays date in yyyy-mm-dd format
    //         // for example: 2021-05-31
    //         date: new Date().toISOString().slice(0, 10),
    //         amount: parseFloat((pointsInput * 0.05).toFixed(2)),
    //         description: "Redeemed " + pointsInput + " Credit Card Points",
    //       });
    //     }
    //     return acc;
    //   })
    // );

    // make a transaction for the cashback in the account

    // close the modal
    setModal(false);

    resetForm();

    // show a success message
    alertUser("Payed the bill successfully!");
  }

  function resetForm() {
    // reset the form
    // setPointsInput(points);
    setAgreed(false);
  }

  function alertUser(message) {
    setAlert(message);
    console.log(alert);
    setMiniModal(true);
  }

  function alertModal() {
    return (
      <Modal
        modalClassName="modal-mini modal-success"
        toggle={() => setMiniModal(false)}
        onClosed={() => setAlert("")}
        isOpen={miniModal}
      >
        <div>
          <Button
            className="btn-neutral"
            color="link"
            type="button"
            onClick={() => setMiniModal(false)}
            style={{
              paddingTop: 0,
              paddingBottom: 0,
              float: "right",
              fontSize: 17,
            }}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </Button>
        </div>
        <div className="modal-header justify-content-center">
          <div className="modal-profile">
            <i
              className="now-ui-icons ui-1_check"
              style={{ color: "green" }}
            ></i>
          </div>
        </div>
        <ModalBody>
          <p>{alert}</p>
        </ModalBody>
      </Modal>
    );
  }

  function stringDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return year + "-" + month + "-" + day;
  }

  // function to show only the first 4 and last 3 digits of the card number
  function formatPts(num) {
    //   format the number to have commas
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export default PayBillModal;
