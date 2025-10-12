import React, { useState } from "react";
import Nav from "../navBar/Nav";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Footer } from "../footer/Footer";

export const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [formData, setFormData] = useState([
    { name: "", email: "", phone: "", sector: "", message: "" },
  ]);
  const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

    const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
      if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid Moroccan phone number format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };
  const sentMessage = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const validateData = validate();
      console.log(validateData);
      if (Object.keys(validateData).length > 0) {
        setErrors(validateData);
        setStatus(false);
        setSending(false);
        return;
      }
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx-c6Ic7k9eMJmxvj7TRe0fByNkMPc1PJI4Ljq-MHq7FYOIpyFpEQKOTLhSSh8kDo0s/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setSending(false);
      setStatus(true);
      setFormData({ name: "", email: "", phone: "", sector: "", message: "" });
    } catch (error) {
      setStatus(false);
    }
  };
  return (
    <>
      <header className="contactUsHead">
        <Nav />
        <div className="contactUsHeader">
          <div className="contactUsContainer">
            <div>
              <h1 className="bigTitle">{t("Contact Us.title")}</h1>
              <p className="paragraph">{t("Contact Us.subtitle")}</p>
            </div>
          </div>
        </div>
      </header>
      <section className="contactUsContent">
        <div className="contactUsContainer">
          <div className="contactForm">
            <form action="" onSubmit={sentMessage}>
              {/* <fieldset> */}
              <legend>Contact Form</legend>
              <div className="formGroup">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name company"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                />
                      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

              </div>
              <div className="formGroup">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email company"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
                      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

              </div>
              <div className="formGroup">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  autoComplete="off"
                  value={formData.phone}
                  onChange={handleChange}
                />
                      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  name="sector"
                  id="sector"
                  placeholder="Enter your sector"
                  value={formData.sector}
                  onChange={handleChange}
                />
                      {errors.sector && <p style={{ color: "red" }}>{errors.sector}</p>}
              </div>
              <div className="formGroup">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
                      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
              </div>
              <button type="submit" className="contactUsButton" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
              {/* </fieldset> */}
            </form>
          </div>
          <div className="contactInfo">
            <h2>Contact Information</h2>
            <p>Email: info@modual.tech</p>
            <p>Phone: +31651845217</p>
            <p>Address: 3 RUE BOUTRIKA 3eme ETAGE N6 MESNANA</p>
            <p>Business Hours: Mon-Fri 9am - 6pm</p>
            <p>Follow Us:</p>
            <div className="socialIcons">
              <i className="fi fi-brands-facebook"></i>
              <i className="fi fi-brands-twitter"></i>
              <i className="fi fi-brands-linkedin"></i>
              <i className="fi fi-brands-instagram"></i>
            </div>
          </div>
        </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.878648024634!2d4.885084316058659!3d52.36697797978606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609d8e5b8e6b7%3A0x9b4f3c4e8e4e8e0!2sKeizersgracht%20241%2C%201016%20EA%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1696101234567!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
      </section>
      <Footer />
    </>
  );
};
