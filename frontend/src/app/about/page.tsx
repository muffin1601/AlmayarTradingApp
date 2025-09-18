import React from "react";

const AboutPage = () => (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
        <h1>About Us</h1>
        <p>
            Welcome to Almayar! We are dedicated to providing exceptional services and solutions to our clients.
            Our team is passionate about innovation, quality, and customer satisfaction.
        </p>
        <section>
            <h2>Our Mission</h2>
            <p>
                To deliver high-quality products that empower our customers and make a positive impact in the industry.
            </p>
        </section>
        <section>
            <h2>Our Values</h2>
            <ul>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Customer Focus</li>
                <li>Collaboration</li>
            </ul>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                Have questions? Reach out to us at <a href="mailto:info@almayar.com">info@almayar.com</a>.
            </p>
        </section>
    </main>
);

export default AboutPage;