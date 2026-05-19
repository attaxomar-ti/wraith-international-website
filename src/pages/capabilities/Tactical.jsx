import React from 'react';
import CapabilityPage from '../../components/CapabilityPage';

export default function Tactical() {
  return (
    <CapabilityPage
      tag="Capability 03"
      title={<>Tactical<br /><em style={{ color: '#f0efed', fontStyle: 'italic' }}>Equipment</em></>}
      heroSrc="/img-tactical-soldier.jpg"
      heroOverlay={0.55}
      intro="Complete tactical equipment solutions — from personal protective equipment to surveillance infrastructure — for law enforcement and military clients worldwide."
      body={[
        'Beyond weapons, Wraith provides the full range of tactical equipment required by law enforcement, military, and security forces to execute their missions. From personal protective equipment and surveillance systems to EOD kits and force protection infrastructure, we source, procure, and deliver complete tactical solutions with the same regulatory precision that governs our weapons programs.',
        'Past contracts have included riot control equipment and hazmat response gear for Iraqi security forces, HESCO force protection barriers for US military operations in Iraq, night vision devices and thermal imaging systems for Gulf region clients, surveillance camera infrastructure for US federal law enforcement, and EOD detection kits for US Army programs. Each delivery is executed under a single contract with Wraith as the accountable prime.',
        'For clients requiring complete outfitting programs — equipping an entire police unit, standing up a new security force, or upgrading the equipment profile of an existing organization — Wraith serves as a single-source integrator. We manage every line item, every supplier relationship, every logistics challenge, and every compliance requirement from a single contract vehicle and a single point of accountability.',
        'Our network of manufacturer relationships across the United States, Europe, and allied nations allows us to source equipment that meets exact specifications — not the closest available substitute. When a contract specifies a particular platform, configuration, or performance standard, we deliver that specification. Not an approximation.',
      ]}
      services={[
        'Body armor and personal protective equipment',
        'Night vision and thermal imaging systems',
        'Surveillance and CCTV infrastructure',
        'EOD detection and disposal equipment',
        'Force protection barriers — HESCO and permanent',
        'Riot control equipment and non-lethal systems',
        'Hazardous materials response gear',
        'Uniforms, duty gear, and load-bearing equipment',
        'Vehicle-mounted equipment and accessories',
        'Complete unit outfitting programs',
        'Surveillance system installation and integration',
      ]}
      whoWeServe={[
        'US Army', 'US Marine Corps', 'SOCOM',
        'Department of Homeland Security', 'Customs and Border Protection',
        'Immigration and Customs Enforcement', 'Federal Bureau of Investigation',
        'US Marshals Service', 'ATF',
        'Iraq Security Forces', 'Qatar Ministry of Interior',
        'Multinational Force Iraq', 'Allied Law Enforcement Agencies',
        'Foreign Security Forces', 'NATO Partner Nations',
      ]}
      advantageTitle="Single Source Accountability"
      advantage={[
        'Tactical equipment procurement fails when it is distributed across multiple vendors with no single accountable party. When a shipment is delayed, when a specification is misunderstood, when logistics breaks down at the last mile — clients need one phone call that produces a solution. Wraith operates as that single call. We do not manage portions of programs. We manage programs.',
        'Our experience procuring and delivering across conflict zones and politically complex environments has produced a logistics infrastructure and network of shipping partners capable of reaching destinations that conventional supply chains cannot. From Doha to Baghdad, from Los Angeles to Amman, we deliver on the schedule the contract requires — not on the schedule that is convenient.',
      ]}
      relatedLinks={[
        { to: '/capabilities/small-arms', label: 'Small Arms' },
        { to: '/capabilities/training', label: 'Training Services' },
      ]}
    />
  );
}
