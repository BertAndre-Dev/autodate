import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy Notice for BertAndre Consulting Limited.",
};

const privacyText = `Privacy Notice
1. Introduction
BertAndre Consulting Limited ("we", "us", "our", or "BertAndre") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Notice explains how we collect, use, disclose, retain, and protect personal data when you interact with our Estate Management Product (the "Product"), our website, and related services.

This Privacy Notice is issued in compliance with the Nigeria Data Protection Act 2023 ("NDPA"), the Nigeria Data Protection Commission's General Application and Implementation Directive ("GAID"), and all applicable data protection laws and regulations.

By using our Product, website, or services, you acknowledge that you have read and understood this Privacy Notice. If you do not agree with the practices described herein, please discontinue use of our services.

2. Data Controller Information
For the purposes of this Privacy Notice, BertAndre acts as the Data Controller responsible for processing your personal data. Our contact details are as follows:

Data Controller    BertAndre Consulting
Registered Address 20 Awudu Ephekha Boulevard, Lekki Phase 1, Lagos
Email Address      info@bertandregroup.com
Phone Number       09138667927
Data Protection Officer Oluwadunsin Babatunde - dunsin.babatunde@bertandregroup.com

3. Categories of Data Subjects
We process personal data belonging to the underlisted categories of individuals. For clarity, this privacy notice applies to you if you are:

a. An individual visiting our official website (www.bertandregroup.com) to learn about our services, access resources, or contact us.
b. A Property owner, estate manager, and/or administrator who create accounts on the Product to manage your properties and tenancies.
c. An individual whose tenancy information is recorded on the Product by property owners or managers, including those subject to identity verification processes.
d. An individual who visits properties managed through the Product and whose visit details are logged by property managers or residents.
e. An individual who makes or receives payments through the Product's integrated payment and wallet services.

4. Categories of Personal Data Collected
We may collect and process the following categories of personal data based on your interaction with our services and the nature of the product you are consuming:

Personal Identification Information
Full name (first name, middle name, surname)
Date of birth
Gender
Photograph/profile picture
National Identification Number (NIN)
Other government-issued identification documents

Contact Information
Phone number(s)
Email address
Residential address
Emergency contact details

Biometric Data (Sensitive Personal Data)
Facial recognition data (for identity verification purposes)
Fingerprint data (where applicable for access control)

Financial and Transaction Data
Bank account details (for payment processing)
Payment card information (processed via licensed third-party payment providers - we do not directly collect or retain your card data)
Transaction history and records
Wallet balance and transaction details
Rental payment records

Property and Tenancy Information
Property address and description
Tenancy agreement details
Rent amount and payment schedule
Move-in and move-out dates
Occupancy status

Technical and Usage Data
IP address
Device information (type, operating system, browser)
Login timestamps and session data
Geolocation data (where enabled)
Cookies and similar tracking technologies

Visitor Log Data
Visitor's full name
Phone number
Purpose of visit
Date and time of visit
Vehicle registration number (if applicable)
Check-in and check-out times

5. Purposes of Processing
We process your personal data for the following purposes:
Service Delivery, Complaint Resolution and Account Management
Identity Verification and Compliance
Payment Processing
Security and Fraud Prevention
Communication
Legal Management and Regulatory Compliance

6. Legal Basis for Processing
Under the NDPA 2023, we process your personal data based on:
Consent
Contract Performance
Legal Obligation
Legitimate Interest

7. Third-Party Data Sharing and Disclosure
We may share personal data with payment service providers, identity verification providers, cloud hosting and infrastructure providers, property owners/managers, regulatory authorities, and professional advisors.

8. Data Retention
We retain your personal data only for as long as necessary to fulfil purposes, comply with legal obligations, and resolve disputes.

9. Your Rights as a Data Subject
Right to request confirmation, rectification, erasure, restrict processing, portability, object to processing, withdraw consent, and related rights under NDPA 2023.

10. Data Security
We implement appropriate technical and organisational measures to protect your personal data.

11. International Data Transfers
Transfers may occur outside Nigeria with safeguards in compliance with NDPA 2023.

12. Children's Privacy
Our Product and services are not intended for use by individuals under 18.

13. Updates to This Privacy Notice
Material changes are notified through email and/or the Product where appropriate.

14. Complaints
You may lodge complaints with NDPC if not satisfied with our response.

15. Contact Us
General Enquiries: info@bertandregroup.com
Data Protection Officer: dunsin.babatunde@bertandregroup.com
`;

export default function PrivacyNoticePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 md:px-8">
      <header className="mb-6">
        <div className="text-xs font-semibold tracking-wide text-[#B71C1C]">
          Privacy Notice
        </div>
        <h1 className="mt-2 text-3xl font-bold text-black">
          BertAndre Consulting Limited
        </h1>
      </header>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-neutral-800">
          {privacyText}
        </pre>
      </div>
    </div>
  );
}

