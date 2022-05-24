import React from "react";
import {Row, Col, Card, CardTitle, CardText, Button} from "reactstrap";

function CardUI({data, viewMore, getAppointment}) {
  return (
    <Row>
      {data.map((d, i) => {
        return (
          <Col sm="4" key={i}>
            <Card body className="mb-4">
              <CardTitle tag="h4">{d.name}</CardTitle>
              <div className="d-flex justify-content-between">
                {d.price === undefined ? null : <CardText>{d.price}₹</CardText>}
                {d.expiry === undefined ? null : <CardText>Expiry Year {d.expiry}</CardText>}
                {d.age === undefined ? null : <CardText>Age {d.age} Year</CardText>}
                {d.fees === undefined ? null : <CardText>Fees {d.fees}₹</CardText>}
              </div>
              {d.price === undefined ? null : <Button type="button" onClick={() => viewMore()}>View More Details</Button>}
              {d.fees === undefined ? null : <Button type="button" onClick={() => getAppointment()}>Get Appointment</Button>}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default CardUI;
