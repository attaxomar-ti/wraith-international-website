import React from 'react';
import LegalPage from '../components/LegalPage';

export default function TermsOfUse() {
  return (
    <LegalPage
      title="TERMS OF USE"
      subtitle="Terms governing access to and use of this website"
      lastUpdated="May 2026"
      sections={[
        {
          heading: '1. Acceptance of Terms',
          paragraphs: [
            'By accessing or using the website at wraithintl.com (the "Site"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Site.',
            'These Terms of Use apply to all visitors, users, and others who access or use the Site. Wraith International LLC reserves the right to modify these terms at any time without prior notice. Your continued use of the Site after any such changes constitutes your acceptance of the revised terms.',
          ],
        },
        {
          heading: '2. Permitted Use',
          paragraphs: [
            'This Site is intended for use by government contracting officers, program managers, procurement officials, industry professionals, and other authorized representatives engaging with Wraith International for legitimate business and procurement purposes.',
            'You may access and use the Site for lawful purposes consistent with these Terms of Use. You may view, download, and print materials from the Site for your personal, non-commercial professional use, provided that all copyright notices and proprietary markings are preserved.',
          ],
        },
        {
          heading: '3. Prohibited Conduct',
          paragraphs: ['You agree not to engage in any of the following activities:'],
          list: [
            'Using the Site for any unlawful purpose or in violation of any applicable federal, state, or local law or regulation',
            'Transmitting any unsolicited or unauthorized advertising, promotional material, or spam',
            'Impersonating any person or entity or falsely representing your affiliation with any organization',
            'Attempting to gain unauthorized access to any portion of the Site or any systems or networks connected to it',
            'Transmitting any classified, controlled unclassified information (CUI), export-controlled, or otherwise restricted government information through this Site',
            'Interfering with or disrupting the integrity or performance of the Site or the data contained therein',
            'Using automated means, including bots or scrapers, to access or collect information from the Site without prior written consent',
          ],
        },
        {
          heading: '4. Intellectual Property',
          paragraphs: [
            'All content on this Site, including but not limited to text, graphics, logos, design elements, and the compilation thereof, is the property of Wraith International LLC and is protected by applicable United States and international copyright, trademark, and other intellectual property laws.',
            'The Wraith International name, logo, and all associated marks are proprietary to Wraith International LLC. Nothing on this Site shall be construed as granting any license or right to use any trademark displayed on the Site without prior written permission.',
          ],
        },
        {
          heading: '5. No Representations Regarding Government Information',
          paragraphs: [
            'Content on this Site describing past contract performance, client relationships, and operational capabilities is provided for general informational purposes only. Past performance information is provided for reference and does not constitute a guarantee of future results or contract award.',
            'References to government agencies, departments, and allied nation clients are provided for informational purposes. Wraith International does not represent that any such agencies endorse the company or its services beyond the scope of specific contract performance.',
          ],
        },
        {
          heading: '6. Disclaimer of Warranties',
          paragraphs: [
            'This Site and its content are provided on an "as is" and "as available" basis without any representations or warranties, express or implied. Wraith International LLC makes no warranty that the Site will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.',
            'To the fullest extent permitted by applicable law, Wraith International disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
          ],
        },
        {
          heading: '7. Limitation of Liability',
          paragraphs: [
            'In no event shall Wraith International LLC, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your access to or use of (or inability to access or use) this Site or any content thereon, even if Wraith International has been advised of the possibility of such damages.',
          ],
        },
        {
          heading: '8. Governing Law and Jurisdiction',
          paragraphs: [
            'These Terms of Use shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Orange County, California.',
          ],
        },
        {
          heading: '9. Severability',
          paragraphs: [
            'If any provision of these Terms of Use is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall remain in full force and effect.',
          ],
        },
        {
          heading: '10. Contact',
          paragraphs: ['Questions regarding these Terms of Use may be directed to:'],
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
