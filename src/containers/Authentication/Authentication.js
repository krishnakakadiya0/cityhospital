import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function Authentication(props) {
  let [user, setUser] = useState("Login");
  let [reset, setReset] = useState(false);

  return (
    <main id="main">
      <section id="auth" className="auth">
        <div className="container">
          <div className="d-flex">
            <div className="col-lg-8 py-5 px-5">
              <div className="d-flex flex-column justify-content-center text-center">
                {reset === true ? (
                  <h2 className="display-4 fw-bold text-dark mb-3">
                    Forgot Your Password
                  </h2>
                ) : user === "Login" ? (
                  <div>
                    <h2 className="display-4 fw-bold text-dark mb-3">
                      Login to Your Account
                    </h2>
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
                  </div>
                ) : (
                  <h2 className="display-4 fw-bold text-dark mb-3">
                    Signup to Your Account
                  </h2>
                )}
                <Form inline>
                  {user === "Signup" ? (
                    <FormGroup floating>
                      <Input
                        id="exampleName"
                        name="name"
                        placeholder="Name"
                        type="name"
                      />
                      <Label for="exampleName">Name</Label>
                    </FormGroup>
                  ) : null}
                  <FormGroup floating>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                    <Label for="exampleEmail">Email</Label>
                  </FormGroup>
                  <FormGroup floating>
                  {
                    reset === true ? null :
                    <>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        />
                      <Label for="examplePassword">Password</Label>
                    </>
                    }
                    {user === "Login" ? (
                      <Button
                        className="bg-transparent text-dark border-0 p-0"
                        onClick={() => {
                          setReset(true);
                          setUser("");
                        }}
                      >
                        Forgot Password ?
                      </Button>
                    ) : (
                      user === 'Signup' ? null :
                      <Button
                        className="bg-transparent text-dark border-0 p-0"
                        onClick={() => {
                          setUser("Login");
                          setReset(false);
                        }}
                      >
                        Back to login
                      </Button>
                    )}
                  </FormGroup>
                  {
                    reset === true ? 
                    <Button type="submit" className="theambtn">
                      Reset Password
                    </Button> :
                  user === "Login" ? (
                    <Button type="submit" className="theambtn">
                      Log In
                    </Button>
                  ) : (
                    <Button type="submit" className="theambtn">
                      Sign Up
                    </Button>
                  )}
                </Form>
              </div>
            </div>
            <div className="col-lg-4 signup">
              <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                {user === "Signup" ? (
                  <div>
                    <h2 className="display-5 fw-bold mb-4">
                      Already Have An Account ?
                    </h2>
                    <Button
                      type="button"
                      className="theambtn"
                      onClick={() => {
                        setUser("Login");
                        setReset(false);
                      }}
                    >
                      Log In
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h2 className="display-5 fw-bold mb-4">New Here?</h2>
                    <Button
                      type="button"
                      className="theambtn"
                      onClick={() => {
                        setUser("Signup");
                        setReset(false);
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Authentication;
