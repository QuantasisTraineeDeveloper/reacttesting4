import React from "react";
import { Container, Section } from "./index.style";
import { Link } from "react-router-dom";

const privacyPolicyData = {
  title: "Privacy Policy",
  introduction: `This Privacy Policy outlines how Tansy Academy collects, uses, discloses, and safeguards your personal information when you use our website and services. We are committed to ensuring the protection and confidentiality of your personal information. By accessing or using our website and services, you consent to the practices described in this Privacy Policy.`,
  informationWeCollect: {
    title: "Information We Collect",
    items: [
      {
        label: "Personal Information:",
        content: `When you register for courses or use our services, we may collect personal information such as your name, email address, contact details, and payment information. This information is necessary for enrollment, account management, and providing a personalized experience.`,
      },
      {
        label: "Usage Data:",
        content: `We collect data about how you interact with our website, including your browsing activities, the pages you visit, and the actions you take. This data helps us improve our services and enhance user experience.`,
      },
      {
        label: "Cookies and Tracking Technologies:",
        content: `We use cookies and similar technologies to gather information about your preferences and activities on our website. This helps us provide a more tailored experience and improve our services.`,
      },
    ],
  },
  howWeUseYourInformation: {
    title: "How We Use Your Information",
    items: [
      {
        label: "Course Delivery and Communication:",
        content: `We use your personal information to enroll you in courses, provide educational content, send notifications about course updates, and communicate with you regarding your account and inquiries.`,
      },
      {
        label: "Personalization:",
        content: `Your data enables us to personalize your learning experience, recommend relevant courses, and suggest content based on your interests and preferences.`,
      },
      {
        label: "Analytics and Improvement:",
        content: `We analyze usage patterns to enhance our website's functionality, identify areas for improvement, and optimize user navigation.`,
      },
      {
        label: "Marketing and Communication:",
        content: `With your consent, we may send you promotional materials, newsletters, and updates about new courses or features. You can opt out of these communications at any time.`,
      },
    ],
  },
  dataSharingAndDisclosure: {
    title: "Data Sharing and Disclosure",
    items: [
      {
        label: "Third-Party Service Providers:",
        content: `We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors and email communication platforms.`,
      },
      {
        label: "Legal Compliance:",
        content: `We may disclose your information if required by law, court order, or government regulations to protect our rights, privacy, safety, or property.`,
      },
    ],
  },
  dataSecurity: {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no online platform is entirely secure, and while we strive to protect your data, we cannot guarantee absolute security.`,
  },
  childrensPrivacy: {
    title: "Children's Privacy",
    content: `Tansy Academy is intended for a general audience and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.`,
  },
  changesToPrivacyPolicy: {
    title: "Changes to Privacy Policy",
    content: `We reserve the right to update and modify this Privacy Policy at any time. We will notify you of significant changes through prominent notices on our website or via email.`,
  },
  contactUs: {
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please `,
    boldContent: <Link to="/contact">Contact Us</Link>,
  },
  acknowledgment: {
    content: `By using Tansy Academy's services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions. This policy was last updated on `,
    boldText: `01-01-2023.`,
  },
};

const PrivacyPolicy = () => {
  const {
    title,
    introduction,
    informationWeCollect,
    howWeUseYourInformation,
    dataSharingAndDisclosure,
    dataSecurity,
    childrensPrivacy,
    changesToPrivacyPolicy,
    contactUs,
    acknowledgment,
  } = privacyPolicyData;

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="heading">{title}</div>
        </div>
      </div>
      <Section className="content">
        <p>{introduction}</p>
        <div className="title">{informationWeCollect.title}</div>
        <ol>
          {informationWeCollect.items.map((item, index) => (
            <li key={index}>
              <span>{item.label}</span> {item.content}
            </li>
          ))}
        </ol>
        <div className="title">{howWeUseYourInformation.title}</div>
        <ol>
          {howWeUseYourInformation.items.map((item, index) => (
            <li key={index}>
              <span>{item.label}</span> {item.content}
            </li>
          ))}
        </ol>
        <div className="title">{dataSharingAndDisclosure.title}</div>
        <ol>
          {dataSharingAndDisclosure.items.map((item, index) => (
            <li key={index}>
              <span>{item.label}</span> {item.content}
            </li>
          ))}
        </ol>
        <div className="title">{dataSecurity.title}</div>
        <p>{dataSecurity.content}</p>
        <div className="title">{childrensPrivacy.title}</div>
        <p>{childrensPrivacy.content}</p>
        <div className="title">{changesToPrivacyPolicy.title}</div>
        <p>{changesToPrivacyPolicy.content}</p>
        <div className="title">{contactUs.title}</div>
        <p>
          {contactUs.content} <span>{contactUs.boldContent}</span>
        </p>
        <br />
        <div>
          <p>
            {acknowledgment.content}
            <span>{acknowledgment.boldText}</span>
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
