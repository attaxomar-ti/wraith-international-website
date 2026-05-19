import React from 'react';
import LegalPage from '../components/LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="PRIVACY POLICY"
      subtitle="How we collect, use, and protect information"
      lastUpdated="May 2026"
      sections={[
        {
          heading: '1. Overview',
          paragraphs: [
            'Wraith International LLC ("Wraith International," "we," "our," or "us") operates the website at wraithintl.com. This Privacy Policy describes how we collect, use, disclose, and protect information obtained through this website and any related communications.',
            'Wraith International is a business-to-business government contractor. This website is designed for professional use by contracting officers, program managers, government procurement officials, and industry representatives. We do not knowingly collect personal information from individuals under the age of 18.',
          ],
        },
        {
          heading: '2. Information We Collect',
          paragraphs: [
            'We collect information that you voluntarily provide when you submit an inquiry through our contact form, request a briefing, or communicate with us via email. This information may include your name, organizational affiliation, government agency or company, professional email address, phone number, and the substance of your inquiry.',
            'We may also collect certain technical information automatically when you visit our website, including your IP address, browser type and version, pages visited, time and date of visit, and referring URL. This information is collected through standard web server logs and analytics tools.',
          ],
        },
        {
          heading: '3. How We Use Your Information',
          paragraphs: [
            'We use the information you provide to respond to your inquiry, provide information about our capabilities and services, facilitate contract discussions and procurement engagements, and maintain records of our professional communications.',
            'Technical information is used to improve the functionality and user experience of our website, monitor for security issues, and understand aggregate usage patterns. We do not use this information for individual profiling or behavioral advertising.',
          ],
        },
        {
          heading: '4. Disclosure of Information',
          paragraphs: [
            'Wraith International does not sell, trade, rent, or otherwise transfer your personal information to third parties for marketing purposes. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to maintain the confidentiality of your information.',
            'We may disclose information when required to do so by law, regulation, legal process, or government request, or when we believe in good faith that disclosure is necessary to protect the rights, property, or safety of Wraith International, our clients, or others.',
          ],
        },
        {
          heading: '5. Data Retention',
          paragraphs: [
            'We retain professional inquiry and contact information for as long as necessary to fulfill the purpose for which it was collected and to comply with applicable legal, regulatory, and business requirements. Business communications related to government contracting activities may be retained for extended periods in accordance with federal records retention requirements.',
          ],
        },
        {
          heading: '6. Security',
          paragraphs: [
            'Wraith International implements reasonable technical and organizational measures to protect the information we collect against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.',
            'Please do not transmit classified, controlled unclassified, or export-controlled information through this website. This website is not authorized for the transmission of such information.',
          ],
        },
        {
          heading: '7. Cookies',
          paragraphs: [
            'Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect aggregate usage data. You may configure your browser to refuse cookies, though some functionality of the site may be limited as a result. We do not use cookies to collect personally identifiable information for advertising purposes.',
          ],
        },
        {
          heading: '8. Third-Party Links',
          paragraphs: [
            'This website may contain links to external websites, including government procurement portals and industry resources. We are not responsible for the privacy practices of external sites and encourage you to review the privacy policies of any third-party sites you visit.',
          ],
        },
        {
          heading: '9. Your Rights',
          paragraphs: [
            'You may request access to, correction of, or deletion of personal information we hold about you by contacting us at the address below. We will respond to such requests in accordance with applicable law. Note that certain information may be retained as required by law or for legitimate business purposes.',
          ],
        },
        {
          heading: '10. Changes to This Policy',
          paragraphs: [
            'We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. Continued use of this website after the posting of changes constitutes your acceptance of the revised policy.',
          ],
        },
        {
          heading: '11. Contact',
          paragraphs: ['For questions regarding this Privacy Policy or our data practices, please contact us:'],
          contact: [
            'Wraith International LLC',
            '402 Rockefeller, Suite 104',
            'Irvine, California 92612',
            'Email: info@wraithintl.com',
            'Phone: +1 714 448 5000',
          ],
        },
      ]}
    />
  );
}
