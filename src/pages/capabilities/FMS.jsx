import React from 'react';
import CapabilityPage from '../../components/CapabilityPage';

export default function FMS() {
  return (
    <CapabilityPage
      tag="Capability 02"
      title="FOREIGN MILITARY SALES"
      noPhoto
      intro="End-to-end management of Foreign Military Sales and Direct Commercial Sales transactions across allied and partner nations."
      body={[
        'Wraith International serves as a prime contractor and authorized broker for Foreign Military Sales and Direct Commercial Sales transactions across allied and partner nations globally. We manage the complete transaction lifecycle — from initial requirements identification through final delivery, post-delivery verification, and program close-out.',
        'Our team navigates the complex regulatory environment governing international defense procurement with precision: ITAR, EAR, the Arms Export Control Act, and partner-nation regulatory requirements across more than fifteen allied nations. We coordinate directly with the Defense Security Cooperation Agency, US embassies, and host-nation ministries to ensure full compliance at every stage of every transaction.',
        'Our established relationships within MENA-region ministries of defense and interior allow us to identify requirements before they enter formal solicitation, position solutions early in the procurement cycle, and execute with a speed and cultural fluency that larger prime contractors cannot replicate. We operate in-country, in-language, and in-relationship.',
        'The Foreign Military Sales process is long, complex, and unforgiving of contractors who do not understand it in detail. Wraith has executed FMS-adjacent transactions across the Gulf region, the Levant, and North Africa — building the institutional knowledge that allows us to deliver where generalist contractors fail.',
      ]}
      services={[
        'FMS case identification and management',
        'Direct Commercial Sales facilitation',
        'Export license acquisition — all categories',
        'ITAR and EAR compliance management',
        'End-user certificate preparation and management',
        'Ministry-level relationship management',
        'DSCA coordination and process navigation',
        'In-country logistics and delivery',
        'Post-delivery support and verification',
        'Multi-nation procurement coordination',
      ]}
      whoWeServe={[
        'Qatar Ministry of Interior', 'Qatar Ministry of Defense',
        'Iraq Security Forces', 'Iraqi Ministry of Defense',
        'Jordan Armed Forces', 'Jordan Ministry of Interior',
        'Egypt Ministry of Defense', 'Saudi Ministry of Defense',
        'UAE Ministry of Defense', 'Kuwait Ministry of Defense',
        'Bahrain Ministry of Interior', 'Oman Royal Armed Forces',
        'US Department of State', 'Defense Security Cooperation Agency',
      ]}
      advantageTitle="Why Wraith for FMS"
      advantage={[
        'Foreign Military Sales is not simply a procurement category — it is a relationship category. The ability to execute FMS-adjacent transactions requires trust built over years of in-theater presence, cultural fluency, and consistent delivery. Wraith\'s track record of sole-source awards across the Gulf region reflects that trust. We are not an unknown vendor submitting unsolicited proposals. We are a known and trusted partner.',
        'The regulatory complexity of FMS transactions — ITAR, EAR, AECA, and the layered requirements of partner-nation procurement law — creates a barrier that eliminates most competitors before the first meeting. Wraith has navigated this environment across fifteen allied nations. That experience is embedded in our team, our processes, and our institutional knowledge. We execute when others fail to qualify.',
      ]}
      relatedLinks={[
        { to: '/capabilities/small-arms', label: 'Small Arms' },
        { to: '/capabilities/tactical', label: 'Tactical Equipment' },
      ]}
    />
  );
}
