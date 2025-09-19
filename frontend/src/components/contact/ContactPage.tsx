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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add API call or email sending logic here
    alert("Your enquiry has been submitted!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={styles.contactPage}>
      

      <div className={styles.contactContainer}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Call Us or Fill the Form</h2>
          <p>Email: info@almayaar.com</p>
          <p>Phone: +91-9877777777</p>
          <p>Address: 123 Market Street, India</p>
          <a href="https://wa.me/919877777777" className={styles.whatsapp}>
           <FaWhatsapp size={22} /> WhatsApp
          </a>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
  <div className={styles.contactFormRow}>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
    <input
      type="tel"
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </div>

  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
  />
  <textarea
    name="message"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
    required
  />
  <button type="submit" className={styles.submitBtn}>
    Submit <FiArrowRight className={styles.ctaIcon3} />
  </button>
</form>
      </div>

      {/* Optional: Google Map */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1234567890!2d90.123456!3d23.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sAl%20Mayaar!5e0!3m2!1sen!2sin!4v1695199999999!5m2!1sen!2sin"
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
