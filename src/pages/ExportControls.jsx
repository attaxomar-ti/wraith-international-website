import React from 'react';
import LegalPage from '../components/LegalPage';

export default function ExportControls() {
  return (
    <LegalPage
      title="EXPORT CONTROLS"
      subtitle="U.S. Export Control Laws — Our Compliance Obligations and Practices"
      lastUpdated="May 2026"
      sections={[
        {
          heading: 'Overview',
          paragraphs: [
            'Wraith International LLC operates under a comprehensive export compliance program governed by the principal U.S. export control regimes: the International Traffic in Arms Regulations (ITAR), administered by the U.S. Department of State; the Export Administration Regulations (EAR), administered by the U.S. Department of Commerce Bureau of Industry and Security (BIS); and the sanctions programs administered by the U.S. Department of the Treasury Office of Foreign Assets Control (OFAC).',
            'Export control compliance is a non-negotiable operational requirement for Wraith International. Every transaction involving a controlled article, technology, software, or service is reviewed against applicable export control regulations prior to execution. This page provides an overview of the export control framework applicable to our operations.',
          ],
        },
        {
          heading: 'ITAR — International Traffic in Arms Regulations',
          paragraphs: [
            'The ITAR, codified at 22 C.F.R. Parts 120–130, controls the export and import of defense articles, defense services, and related technical data enumerated on the United States Munitions List (USML). Wraith International is registered with the Directorate of Defense Trade Controls (DDTC) as required by 22 C.F.R. § 122.1.',
            'Items subject to ITAR control include small arms, ammunition, military vehicles, night vision equipment, surveillance systems, and related technical data and services. Export of ITAR-controlled items without the required license or applicable exemption is a federal crime subject to civil and criminal penalties. Wraith International applies for and maintains appropriate DDTC export licenses for all covered transactions.',
          ],
        },
        {
          heading: 'EAR — Export Administration Regulations',
          paragraphs: [
            'The EAR, codified at 15 C.F.R. Parts 730–774, controls the export, re-export, and transfer of dual-use items, technology, and software with commercial and potential military applications. Items subject to EAR control are listed on the Commerce Control List (CCL). Wraith International reviews all export transactions against the CCL to determine applicable Export Control Classification Numbers (ECCNs) and license requirements.',
            'Items that are not subject to ITAR control may nonetheless require an EAR license depending on the destination country, end user, and end use. Our compliance review process addresses both ITAR and EAR requirements to ensure that all applicable authorizations are in place before any export proceeds.',
          ],
        },
        {
          heading: 'OFAC Sanctions Compliance',
          paragraphs: [
            'The Office of Foreign Assets Control administers and enforces economic and trade sanctions programs targeting specific countries, governments, entities, and individuals. Wraith International screens all transactions, counterparties, and financial institutions against OFAC\'s Specially Designated Nationals and Blocked Persons (SDN) list and applicable country-specific sanctions programs.',
            'Wraith International does not engage in transactions with OFAC-sanctioned countries, entities, or individuals. Current OFAC sanctions programs that are directly relevant to our operating regions include programs targeting Iran, North Korea, Syria, Russia, and designated terrorist organizations and proliferators.',
          ],
        },
        {
          heading: 'Restricted Party Screening',
          paragraphs: [
            'Prior to any export transaction, Wraith International conducts comprehensive restricted party screening of all transaction parties, including buyers, consignees, freight forwarders, financial institutions, and known end users. Our screening covers the following lists as a minimum:',
          ],
          list: [
            'OFAC Specially Designated Nationals and Blocked Persons (SDN) List',
            'OFAC Consolidated Sanctions List',
            'BIS Denied Persons List',
            'BIS Entity List',
            'BIS Unverified List',
            'State Department Nonproliferation Sanctions Lists',
            'State Department DDTC Debarred Parties List',
            'UN Security Council Consolidated Sanctions List',
            'EU Consolidated Sanctions List',
          ],
        },
        {
          heading: 'License Determination and Application',
          paragraphs: [
            'Every Wraith International export transaction involving potentially controlled items begins with a formal license determination review. This review assesses the item\'s classification under the USML or CCL, the destination country and applicable country group restrictions, the end user and end-use certification requirements, and available license exemptions or exceptions.',
            'Where a license is required, Wraith International prepares and submits the applicable license application — DSP-5 for ITAR exports, BIS-748P for EAR exports — and does not proceed with any shipment until the appropriate authorization is received and documented. License applications are prepared with the specificity and accuracy required for regulatory approval, reflecting our experience across multiple product categories and destination countries.',
          ],
        },
        {
          heading: 'Foreign Military Sales and Direct Commercial Sales',
          paragraphs: [
            'Transactions conducted through the U.S. Foreign Military Sales (FMS) program are government-to-government transactions managed through the Defense Security Cooperation Agency (DSCA). FMS transactions have their own authorization framework distinct from commercial export licensing. Wraith International works within both the FMS framework and the commercial Direct Commercial Sales (DCS) framework, applying the appropriate authorization regime to each transaction.',
            'DCS transactions require commercial export licenses under ITAR or EAR as applicable. We work with clients to structure DCS transactions in compliance with all applicable export control requirements, including end-user certification, license conditions, and reporting obligations.',
          ],
        },
        {
          heading: 'Employee Training and Compliance Culture',
          paragraphs: [
            'Export control compliance requires ongoing training and institutional awareness. Wraith International personnel involved in procurement, sales, logistics, and legal functions receive export control training appropriate to their roles. We maintain written export compliance policies and procedures and conduct periodic internal compliance reviews.',
            'Our compliance culture is anchored in the recognition that export control violations carry severe consequences — including criminal prosecution, civil monetary penalties, and permanent disbarment from export privileges — and that no business interest justifies non-compliance.',
          ],
        },
        {
          heading: 'Reporting Concerns',
          paragraphs: [
            'Any Wraith International employee, subcontractor, or partner who becomes aware of a potential export control violation or is approached to participate in conduct that may violate U.S. export control laws is expected to report that concern immediately to senior management. Potential violations are assessed promptly and, where appropriate, voluntarily disclosed to the relevant regulatory authority.',
          ],
        },
        {
          heading: 'Important Notice Regarding This Website',
          paragraphs: [
            'This website is not an authorized channel for the transmission, discussion, or exchange of export-controlled technical data, ITAR-controlled information, classified information, or Controlled Unclassified Information. Please do not submit such information through this site.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: ['Export control compliance inquiries may be directed to:'],
          contact: [
            'Wraith International LLC',
            '402 Rockefeller, Suite 104',
            'Irvine, California 92612',
            'Email: contracts@wraithintl.com',
            'Phone: +1 714 448 5000',
          ],
        },
      ]}
    />
  );
}
