import React from 'react';
import CapabilityPage from '../../components/CapabilityPage';

export default function Lodging() {
  return (
    <CapabilityPage
      tag="Capability 04"
      title={<>Lodging &<br /><em style={{ color: '#f0efed', fontStyle: 'italic' }}>Hospitality</em></>}
      heroSrc="/img-military-tents.jpg"
      heroOverlay={0.5}
      intro="Government lodging solutions and base support services for military and diplomatic operations worldwide. Every location. Every standard."
      body={[
        'Wraith International delivers government lodging solutions and base support services for military, diplomatic, and government contractor personnel deployed across domestic locations and international operations. We have supported lodging requirements for personnel operating across conflict zones, established overseas bases, and diplomatic facilities in multiple countries.',
        'Our hospitality capability spans the full spectrum from temporary accommodation programs for deployed personnel to permanent facility development and management for long-duration programs. We coordinate with host-nation vendors, manage quality assurance against contract-specified standards, and ensure that government personnel receive the service level, amenity package, and documentation required by their program.',
        'This capability is deliberately positioned alongside our security and defense portfolio. Government operations do not separate their logistics from their security requirements — a police academy requires both training equipment and a facility to house the trainees. A military advisory team requires both the advisory capability and the accommodation infrastructure. Wraith covers both under a single contract vehicle.',
        'Our experience across the Gulf region and the broader MENA market has produced relationships with hospitality and facility management vendors capable of delivering US-standard service quality in locations where it would otherwise be unavailable. These relationships represent years of vetting, qualification, and performance history that a new contractor cannot replicate.',
      ]}
      services={[
        'Government personnel lodging programs',
        'Base support and facilities management services',
        'Diplomatic facility support services',
        'Temporary accommodation for deployed personnel',
        'Long-duration government housing programs',
        'Facility construction oversight and project management',
        'Vendor qualification and quality assurance',
        'Hospitality infrastructure development',
        'Catering and food service coordination',
        'Transportation and ground support integration',
      ]}
      whoWeServe={[
        'US Department of Defense — Overseas Programs', 'Department of State',
        'Military Advisory Teams', 'Defense Contract Agencies',
        'US Embassy Facilities', 'Diplomatic Security Personnel',
        'Government Contractor Personnel', 'NATO Exercises and Operations',
        'Coalition Force Housing Programs', 'Training Program Participants',
      ]}
      advantageTitle="In-Country Relationships"
      advantage={[
        'Government lodging in complex operating environments is not a commodity procurement. The ability to deliver US-standard accommodation in locations ranging from Doha to Baghdad requires vendor networks, local relationships, and operational experience that take years to build. Wraith has built them. Our partners in the Gulf region have delivered for US government programs across multiple contracts and multiple years — their performance record is documented and verifiable.',
        'The integration of lodging capability with our defense and security portfolio creates a combined offering that government clients increasingly require. A single contract vehicle covering equipment, training, and accommodation reduces administrative burden, eliminates coordination risk, and creates a single point of accountability that multi-vendor arrangements cannot provide.',
      ]}
      relatedLinks={[
        { to: '/capabilities/training', label: 'Training Services' },
              ]}
    />
  );
}
