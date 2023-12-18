import React from "react";
import { Container, Section } from "./index.style";
import { Link } from "react-router-dom";

function TermsConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `Welcome to Tansy Cloud. By accessing or using our services, 
        you agree to comply with and be bound by the following Terms of Service. 
        If you disagree with any part of these terms, please do not use our website.`,
    },
    {
      title: "2. Use of Services",
      content: [
        {
          sub_title: "2.1 Account Registration",
          list: [
            "To access certain features of our services, you may need to create an account.",
            "You agree to provide accurate, complete, and updated information during registration.",
            "You are solely responsible for maintaining the confidentiality of your account and password.",
          ],
        },
        {
          sub_title: "2.2 Prohibited Activities",
          text: "You agree not to:",
          list: [
            "Use our services for any illegal or unauthorized purpose.",
            "Transmit any harmful code, viruses, or disruptive content.",
            "Attempt to gain unauthorized access to our systems.",
            "Engage in any activity that could disrupt the integrity or performance of the services.",
          ],
        },
      ],
    },
    {
      title: "3. Intellectual Property",
      content: [
        {
          sub_title: "3.1 Content Ownership",
          list: [
            "Our services may allow you to upload, share, and create content. You retain ownership of your content.",
            "We do not claim ownership of the content you provide through our services.",
          ],
        },
        {
          sub_title: "3.2 Trademarks",
          list: [
            "All trademarks, logos, and service marks displayed on the website are the property of their respective owners.",
            "You may not use any trademarks without the prior written permission of the owner.",
          ],
        },
      ],
    },
    {
      title: "4. Privacy",
      content: [
        {
          sub_title: "4.1 Data Collection and Usage",
          list: [
            "Our Privacy Policy explains how we collect, use, and protect your personal information.",
            "By using our services, you consent to the data practices described in our Privacy Policy.",
          ],
        },
      ],
    },
    {
      title: "5. Termination",
      content: [
        {
          sub_title: "5.1 Termination by Us",
          list: [
            "We reserve the right to suspend or terminate your account if you violate these Terms of Service.",
            "Upon termination, your right to access and use our services will cease immediately.",
          ],
        },
      ],
    },
    {
      title: "6. Disclaimer of Warranties",
      content: `We provide our services 'as is' and 'as available.' 
        We do not warrant that our services will be uninterrupted,
        error-free, or free from harmful components.`,
    },
    {
      title: "7. Contact Us",
      content:
        "If you have any questions or concerns regarding these Terms of Service, please ",
      subcontent: <Link to="/contact">Contact Us.</Link>,
    },
  ];

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="heading">Terms & Conditions</div>
        </div>
      </div>
      <Section>
        {sections.map((section, index) => (
          <div key={index}>
            <div className="title">{section.title}</div>
            {Array.isArray(section.content) ? (
              <div>
                {section.content.map((subSection, subIndex) => (
                  <div key={subIndex}>
                    <div className="sub_title">{subSection.sub_title}</div>
                    <div className="sub_text">{subSection.text}</div>
                    {subSection.list ? (
                      <ul>
                        {subSection.list.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{subSection.text}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="wrapper">
                <p>{section.content}</p>
                <span>{section.subcontent}</span>
              </div>
            )}
          </div>
        ))}
      </Section>
    </Container>
  );
}

export default TermsConditions;
