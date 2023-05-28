
import React from "react";
import { CardTitle } from "reactstrap";

function CardField( {title, value}) {
    return <CardTitle tag="h7"className="no-margin">
            <span className="acc-card-header">{title}</span>
            <br />
            {value}
          </CardTitle>
    
}

export default CardField;