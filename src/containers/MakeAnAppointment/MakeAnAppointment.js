import React from "react";
import { FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";

function MakeAnAppointment(props) {

    let schema = yup.object().shape({
        name: yup.string().required("Name is Required"),
        email: yup.string().email("Enter Valid Email"),
        phone: yup.number("Number must be in digit").moreThan(1000000000, "Phone number not less that 10 char.").lessThan(9999999999, "Phone number not more than 10 char.").required("Phone number is required"),
        appointmentDate: yup.date().required("Appointment date is required")
    });
      
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
          appointmentDate: ''
        },
        validationSchema : schema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });


  return (
    <main id="main">
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec
              lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus
              placerat mi et suscipit pulvinar.
            </p>
          </div>
          <Formik>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col lg={4} md={6}>
                  <FormGroup floating>
                    <Input
                      id="exampleName"
                      name="name"
                      placeholder="name"
                      type="text"
                      onChange={formik.handleChange}
                    />
                    <Label for="exampleName">Your Name</Label>
                  {formik.errors.name ? <p className="text-start ms-3 text-danger small">{formik.errors.name}</p> : null}
                  </FormGroup>
                </Col>
                <Col lg={4} md={6}>
                  <FormGroup floating>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="email"
                      type="email"
                      onChange={formik.handleChange}
                    />
                    <Label for="exampleEmail">Your Email</Label>
                  {formik.errors.email ? <p className="text-start ms-3 text-danger small">{formik.errors.email}</p> : null}
                  </FormGroup>
                </Col>
                <Col lg={4} md={6}>
                  <FormGroup floating>
                    <Input
                      id="examplePhone"
                      name="phone"
                      placeholder="phone"
                      type="tel"
                      onChange={formik.handleChange}
                    />
                    <Label for="examplePhone">Your Phone</Label>
                  {formik.errors.phone ? <p className="text-start ms-3 text-danger small">{formik.errors.phone}</p> : null}
                  </FormGroup>
                </Col>
                <Col lg={4} md={6}>
                  <FormGroup floating>
                    <Input
                      id="exampleDate"
                      name="appointmentDate"
                      placeholder="date"
                      type="date"
                      onChange={formik.handleChange}
                    />
                    <Label for="exampleDate">Appointment Date</Label>
                  {formik.errors.appointmentDate ? <p className="text-start ms-3 text-danger small">{formik.errors.appointmentDate}</p> : null}
                  </FormGroup>
                </Col>
                <Col lg={4} md={6}>
                  <FormGroup floating>
                    <Input id="exampleSelect" name="select" type="select" onChange={formik.handleChange}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                    <Label for="exampleSelect">Select Department</Label>
                  {formik.errors.department ? <p className="text-start ms-3 text-danger small">{formik.errors.department}</p> : null}
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup floating>
                    <Input id="exampleText" name="text" type="textarea" />
                    <Label for="exampleText">Message (Optional)</Label>
                  </FormGroup>
                </Col>
              </Row>
              <div className="text-center">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}

export default MakeAnAppointment;
