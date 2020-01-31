import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Form, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [value, setValue] = useState(false);

  const NameInput = e => {
    setName(e.target.value);
  };

  const EmailInput = e => {
    setEmail(e.target.value);
  };
  const MessageInput = e => {
    setMessage(e.target.value);
  };

  const data = { name, email, message };
  const check = name.length > 0 && email.length > 0 && value.length > 0;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setLoading(<i className="fa fa-spinner fa-spin loadingIcon" />);

      axios
        .post("https://projects.rintuweb.com/React-Web-App/contact.php", data)
        .then(function(response) {
          console.log(response);
          setName("");
          setEmail("");
          setMessage("");
          setLoading("");
          setSuccessMsg(true);
          setValidated(false);
          window.grecaptcha.reset();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  const onChange = value => {
    setValue(value);
  };

  return (
    <>
      {successMsg ? (
        <Alert
          variant="success"
          onClose={() => setSuccessMsg(false)}
          dismissible
          className="w-100"
        >
          <p className="mb-0">
            Contact form successfully submitted. Thank you, We will get back to
            you soon!
          </p>
        </Alert>
      ) : null}
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        method="POST"
      >
        <Form.Row>
          <Form.Group as={Col} sm="12">
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={name}
              name="name"
              onChange={NameInput}
            />
            <Form.Control.Feedback type="invalid">
              Name Required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} sm="12">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={EmailInput}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm="12">
            <Form.Control
              as="textarea"
              value={message}
              name="message"
              onChange={MessageInput}
              rows="3"
            />
          </Form.Group>
          <Form.Group as={Col} sm="12">
            {/* <div
              className="g-recaptcha"
              data-sitekey="6LdFftMUAAAAAGJAvnvRKl4K6FdQYjrNdE_7Nrae"
              data-callback="verifyRecaptchaCallback"
              data-expired-callback="expiredRecaptchaCallback"
            ></div> */}
            {/* <Form.Control required data-recaptcha="true" className="d-none" /> */}
            <ReCAPTCHA
              sitekey="6Lf_OtQUAAAAAHjGWFDr_Vq5itSHjcJ-B0ippfiq"
              onChange={onChange}
              value={value}
            />
            <Form.Control.Feedback type="invalid">
              Captcha Required
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button
          type="submit"
          variant="link"
          className="knowMoreBtn text-white text-decoration-none"
          disabled={!check}
        >
          Send <i className="fa fa-send"></i>
        </Button>
        {loading}
      </Form>
    </>
  );
}
