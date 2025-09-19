"use client";

import React, { useState } from "react";
import styles from "./styles/ContactPage.module.css";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your enquiry has been submitted!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={styles.contactPage__wrapper}>
      <div className={styles.contactPage__container}>
        {/* Contact Info */}
        <div className={styles.contactPage__info}>
          <h2 className={styles.contactPage__heading}>
            Call Us or Fill the Form
          </h2>
          <p className={styles.contactPage__text}>Email: info@almayaar.com</p>
          <p className={styles.contactPage__text}>Phone: +91-9877777777</p>
          <p className={styles.contactPage__text}>
            Address: 123 Market Street, India
          </p>
          <a
            href="https://wa.me/919877777777"
            className={styles.contactPage__whatsapp}
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form
          className={styles.contactPage__form}
          onSubmit={handleSubmit}
        >
          <div className={styles.contactPage__formRow}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.contactPage__input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.contactPage__input}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.contactPage__input}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.contactPage__textarea}
          />
          <button
            type="submit"
            className={styles.contactPage__submitBtn}
          >
            Submit{" "}
            <FiArrowRight className={styles.contactPage__ctaIcon} />
          </button>
        </form>
      </div>

      {/* Map */}
      <div className={styles.contactPage__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Al Mayaar Location"
        />
      </div>
    </div>
  );
};

export default ContactPage;
