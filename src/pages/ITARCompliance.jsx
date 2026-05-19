import React from 'react';
import LegalPage from '../components/LegalPage';

export default function ITARCompliance() {
  return (
    <LegalPage
      title="ITAR COMPLIANCE"
      subtitle="International Traffic in Arms Regulations — Our Compliance Framework"
      lastUpdated="May 2026"
      sections={[
        {
          heading: 'Overview',
          paragraphs: [
            'Wraith International LLC is registered with the U.S. Department of State Directorate of Defense Trade Controls (DDTC) in accordance with the International Traffic in Arms Regulations (ITAR), 22 C.F.R. Parts 120–130. ITAR registration is a mandatory requirement for any person or company engaged in the business of manufacturing, exporting, or brokering defense articles and defense services listed on the United States Munitions List (USML).',
            'Compliance with ITAR is not a procedural formality for Wraith International — it is a core operational requirement that governs the conduct of every international transaction involving controlled defense articles, technical data, and defense services. This page provides an overview of our ITAR compliance framework for the benefit of our clients, partners, and counterparties.',
          ],
        },
        {
          heading: 'DDTC Registration',
          paragraphs: [
            'Wraith International maintains an active registration with the Directorate of Defense Trade Controls, U.S. Department of State. Our registration is renewed annually in accordance with 22 C.F.R. § 122.3 and reflects our status as a licensed broker and exporter of defense articles covered by the United States Munitions List.',
            'Copies of our current DDTC registration certificate are available to qualified government clients and counterparties upon request and under appropriate confidentiality arrangements. Verification of our registration status may also be confirmed through the DDTC registration database.',
          ],
        },
        {
          heading: 'Scope of ITAR-Covered Activities',
          paragraphs: [
            'ITAR applies to the export, re-export, and transfer of defense articles, technical data related to defense articles, and defense services. For Wraith International, ITAR compliance governs our procurement and export of small arms and light weapons, associated ammunition and accessories, night vision and optical systems, tactical equipment, surveillance and detection systems, and other items listed on the USML.',
            'Our ITAR compliance program also addresses the provision of training and technical assistance related to ITAR-controlled items, the preparation of export license applications and associated documentation, and the management of end-user commitments and post-shipment verification requirements.',
          ],
        },
        {
          heading: 'Export License Requirements',
          paragraphs: [
            'The export of most USML-listed items requires a license issued by the Directorate of Defense Trade Controls, or an available exemption under 22 C.F.R. Part 123. Wraith International applies for and manages export licenses for all transactions involving ITAR-controlled articles, ensuring that each transaction is covered by the appropriate authorization prior to any export or transfer.',
            'We work with clients to develop accurate and complete export license applications, including precise commodity descriptions, end-use certifications, and supporting documentation. Our experience across multiple export license categories allows us to identify the appropriate license type and manage the application process efficiently.',
          ],
        },
        {
          heading: 'End-Use Monitoring and Documentation',
          paragraphs: [
            'ITAR imposes significant obligations on exporters regarding end-use monitoring and the documentation of foreign recipients. Wraith International obtains appropriate end-user certificates and other required certifications from foreign government buyers prior to initiating any export transaction. We maintain documentation records in accordance with the seven-year retention requirement under 22 C.F.R. § 122.5.',
            'We coordinate with the relevant U.S. Embassy Office of Defense Cooperation where applicable and support post-shipment verification requirements as directed by DDTC or the relevant country team.',
          ],
        },
        {
          heading: 'Prohibited Persons and Restricted Destinations',
          paragraphs: [
            'Prior to any transaction involving ITAR-controlled items or services, Wraith International screens all parties — including buyers, freight forwarders, end users, and financial institutions — against the applicable U.S. Government restricted party lists, including the DDTC Debarred Parties List, the OFAC Specially Designated Nationals List, the Department of Commerce Entity List, and the State Department\'s Nonproliferation Sanctions lists.',
            'Transactions involving ITAR-controlled items are prohibited with embargoed countries under 22 C.F.R. Part 126 and with any party that appears on a U.S. Government restricted party list. Wraith International does not engage in transactions that would constitute unauthorized brokering, re-export, or retransfer of ITAR-controlled items.',
          ],
        },
        {
          heading: 'Voluntary Disclosures and Compliance Culture',
          paragraphs: [
            'Wraith International maintains a zero-tolerance policy for ITAR violations. Any potential violation identified through internal review or third-party notification is immediately escalated to senior management and assessed for voluntary disclosure to DDTC in accordance with 22 C.F.R. § 127.12. We believe that a culture of proactive compliance — rather than reactive enforcement response — is the appropriate standard for a company operating in the defense trade space.',
          ],
        },
        {
          heading: 'Important Notice Regarding This Website',
          paragraphs: [
            'This website is not authorized for the transmission, storage, or discussion of ITAR-controlled technical data, export-controlled information, classified information, or Controlled Unclassified Information (CUI). Please do not submit any such information through this website\'s contact form or by email to addresses listed on this site.',
            'Inquiries involving ITAR-controlled transactions should be directed to our contracts team through secure channels. We will establish appropriate communication protocols for sensitive discussions.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: ['For ITAR compliance inquiries or to verify our registration status, please contact:'],
          contact: [
            'Wraith International LLC',
            '402 Rockefeller, Suite 104',
            'Irvine, California 92612',
            'Compliance Inquiries: contracts@wraithintl.com',
            'Phone: +1 714 448 5000',
          ],
        },
      ]}
    />
  );
}
