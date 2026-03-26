import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Notice & Policy",
  description:
    "Cookie Notice & Policy for BertAndre Consulting Limited.",
};

const cookieText = `Cookie Notice
BertAndre Consulting Limited

Cookie Notice
a.
The objective of this policy is to communicate what cookies are, how our organization uses cookies, and the options available to you for managing cookies when using our website.
b.
When you first visit our site, you will be presented with a consent notice that gives you the option to Accept All, Reject All, or customize your preferences via Cookie Settings. All, or customize your preferences via Cookie Settings.

2. How We Use Cookies
a.
We use cookies to give you a better and more inclusive customer experience. We only use your information in accordance with NDPA and other applicable regulations, as explained in our Cookie Policy.

Cookie Policy
BertAndre Consulting Limited

Table of Contents
Record of Change
Introduction
What are Cookies?
Types of Cookies and how we use them
Keeping Your Personal Information Safe
Cookie Preferences
Cookie Consent
Review
Policy Compliance
Record of Change
A description of any changes to the document are to be entered here.

Version	Date	Reviewed by	Key changes
1.0	01/12/2025	—	—

Introduction
The objective of this policy is to communicate what cookies are, how BertAndre Consulting Limited uses cookies and the options available to customers for managing cookies when using BertAndre Consulting Limited's website.

What are Cookies?
A cookie is a small text file that is sent to and stored in the browser directories of your device (smartphone or PC). Cookies can be used for a variety of purposes such as identifying users, keeping track of preferences and activity (e.g. Language, Currency, IP address used and Time zone).

Types of Cookies and how we use them
Session Cookies
Session cookies are cookies that expire when you end the session (leave the site or close your browser). Session cookies are used to store certain information while you use the site that makes navigation and your experience on our site easier and more convenient.

Persistent Cookies
Persistent cookies are cookies that remain stored on your device until their expiry dates are exceeded or until they are deleted. They are used to store preferences so that the website can remember your choices the next time you access the site. They are used to provide a more customized experience to you whenever you access our website.

In addition to the above types, if you follow a link from our website to another website, please be aware that the owner of the other website will have their own privacy and cookie policies for their site. Please check the relevant third-party website for more information on their use of cookies.

Keeping Your Personal Information Safe
•
Our cookies do not store personal or sensitive information; they simply hold a unique random reference to you so that once you visit the site we can recognize who you are and provide certain content to you.
•
The cookies we use cannot read or search your computer or mobile device to obtain information about you or your family, or read any material kept on your device.

Cookie Preferences
Various browsers have different methods of managing cookies (including disabling options). However, you should note that some cookies are essential and disabling them may result in some steps or services not functioning properly.

For more information on how to manage cookies, please refer to: https://www.aboutcookies.org for detailed guidance on how to control, disable or delete cookies.

Cookie Consent
In compliance with the extant Data Protection Regulations like the Nigerian Data Protection Act (NDPA), and other applicable regulations, websites associated with our organization provide consent notices that give customers the option to either accept, reject or manage their preferences (i.e adjust their cookie consent) and also get more detailed information about our cookies.

BertAndre Consulting Limited has classified the cookies we collect into two:

Essential (Required): These are cookies that the site cannot function properly without. This includes cookies for access to secure areas and security features. Essential cookies do not collect personal or sensitive information and are not used for tracking purposes. Examples include session identifiers and security tokens that protect against malicious activity.
Non-essential: These are cookies that may not be strictly necessary for the website to function but are used to enhance user experience, collect analytics, or support advertising. Non-essential cookies are only placed on your device with your consent. Examples include analytics cookies that help us understand how users interact with our website and advertising cookies used to display relevant content.

Review
This policy will be subject to annual review to reflect any changes in cookie usage, technology or legal requirements.

Policy Compliance
•
BertAndre Consulting Limited will verify compliance of this policy through various means which include but are not limited to internal and external audits and business reporting tools.
•
Any justifiable exceptions to this policy must be approved in advance by management.
•
An employee found to have violated this policy may be subject to disciplinary action, up to and including termination of employment.
`;

export default function CookieNoticePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 md:px-8">
      <header className="mb-8">
        <div className="text-xs font-semibold tracking-wide text-[#B71C1C]">
          Cookie Notice
        </div>
        <h1 className="mt-2 text-3xl font-bold text-black">
          BertAndre Consulting Limited
        </h1>
      </header>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-neutral-800">
          {cookieText}
        </pre>
      </div>
    </div>
  );
}

