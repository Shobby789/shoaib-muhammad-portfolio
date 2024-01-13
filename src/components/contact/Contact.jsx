import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../App.css";

export default function Contact() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetails((values) => ({ ...values, [name]: value }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formDetails.name || !formDetails.email || !formDetails.message) {
      alert("Please Fill in the fields");
    } else {
      emailjs
        .sendForm(
          "service_qg1o6qj",
          "template_ugiqt9i",
          form.current,
          "myaDDGWEvUz3CLdzC"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormDetails({
              name: "",
              email: "",
              message: "",
            });
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Message not sent!");
          }
        );
    }
  };
  return (
    <>
      <div className="container-fluid py-5" id="contact">
        <h2
          className="fs-1 fw-bold text-center mt-5 mb-3 text-uppercase"
          data-aos="fade-up"
        >
          Contact
        </h2>
        <div
          className="bg-warning mx-auto rounded"
          style={{ width: 50, border: "3px solid #fdcf28" }}
          data-aos="fade-up"
        ></div>
        <p className="mx-auto w-75 mt-4 fs-5 text-center" data-aos="fade-up">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="container py-5">
          <form
            className="mx-auto py-5 mb-4 bg-white contact-form"
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mb-3 mx-auto py-2" data-aos="fade-up">
              <label
                htmlFor="name"
                className="form-label fw-bold text-secondary"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control text-uppercase py-3"
                placeholder="Enter Your Name"
                id="name"
                name="name"
                style={{ backgroundColor: "#f7fafa" }}
                value={formDetails.name}
                onChange={onChangeHandle}
              />
            </div>
            <div className="mb-3 py-2" data-aos="fade-up">
              <label
                htmlFor="name"
                className="form-label fw-bold text-secondary"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control text-uppercase py-3"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                style={{ backgroundColor: "#f7fafa" }}
                value={formDetails.email}
                onChange={onChangeHandle}
              />
            </div>
            <div className="mb-3 py-2" data-aos="fade-up">
              <label
                htmlFor="message"
                className="form-label fw-bold text-secondary"
              >
                Message
              </label>
              <textarea
                className="form-control text-uppercase py-3"
                id="message"
                name="message"
                rows={6}
                placeholder="Enter Your Message"
                style={{ backgroundColor: "#f7fafa" }}
                value={formDetails.message}
                onChange={onChangeHandle}
              />
            </div>
            <div className="my-4 text-end pb-3" data-aos="fade-up">
              <button
                className="btn btn-warning fw-semibold rounded cv-btn py-2 text-uppercase float-end"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
