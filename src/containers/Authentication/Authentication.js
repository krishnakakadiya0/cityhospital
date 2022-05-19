import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function Authentication(props) {
  return (
    <main id="main">
      <section id="auth" className="auth">
        <div className="container">
          <div className="d-flex">
            <div className="col-lg-8 py-5 px-5">
              <div className="d-flex flex-column justify-content-center text-center">
                <h2 className="display-4 fw-bold text-dark">Login to Your Account</h2>
                <h5 className="social">Login using social networks</h5>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
                <p className="usingmail mb-1">OR</p>
                <Form inline>
                  <FormGroup floating>
                    <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
                    <Label for="exampleEmail">Email</Label>
                  </FormGroup>{" "}
                  <FormGroup floating>
                    <Input id="examplePassword" name="password" placeholder="Password" type="password" />
                    <Label for="examplePassword">Password</Label>
                  </FormGroup>{" "}
                  <Button type="submit" className="theambtn">Sign In</Button>
                </Form>
              </div>
            </div>
            <div className="col-lg-4 signup">
              <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                <h2 className="display-5 fw-bold mb-4">New Here?</h2>
                <p className="px-5 mb-5">Sign up and discover a great amount of new opportunities!</p>
                <Button type="button" className="theambtn">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Authentication;
