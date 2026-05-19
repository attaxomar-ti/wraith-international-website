import React from 'react';
import CapabilityPage from '../../components/CapabilityPage';

export default function SmallArms() {
  return (
    <CapabilityPage
      tag="Capability 01"
      title={<>Small Arms &<br /><em style={{ color: '#f0efed', fontStyle: 'italic' }}>Light Weapons</em></>}
      heroSrc="/img-small-arms.jpg"
      heroOverlay={0.65}
      intro="FFL-licensed procurement, brokerage, and export of small arms and light weapons to domestic and allied government clients worldwide."
      body={[
        'Wraith International holds a Federal Firearms License and maintains the full regulatory authorizations required to procure, broker, and export small arms and light weapons on behalf of domestic and allied government clients. This is a restricted category — one in which few small businesses are permitted to operate — and our authorization represents a significant and durable competitive advantage.',
        'Our portfolio spans the complete spectrum of small arms and crew-served weapons: service pistols, assault rifles, carbines, submachine guns, light and heavy machine guns, precision sniper systems, anti-materiel platforms, and associated optics and accessories. We source from leading manufacturers across NATO-allied nations and coordinate all end-to-end logistics, end-user certification, and export licensing.',
        'Past delivery programs have included PKM machine guns to the Iraq Security Forces, complete sniper suite systems to the Qatar Ministry of Interior, and multiple handgun and rifle procurement programs across the MENA region. Every transaction is executed with full regulatory compliance, documented chain of custody, and post-delivery verification.',
        'We do not simply identify suppliers. We manage the complete transaction from requirements analysis through delivery confirmation — acting as the single accountable party across every step of a procurement process that most organizations find prohibitively complex.',
      ]}
      services={[
        'Service pistols and duty handguns',
        'Assault rifles, carbines, and battle rifles',
        'Light and heavy machine guns',
        'Precision sniper and anti-materiel systems',
        'Suppressed and specialty variants',
        'Crew-served weapons systems',
        'Optics, night vision, and sighting systems',
        'Ammunition — all calibers and configurations',
        'End-user certification and documentation management',
        'Export licensing and ITAR compliance coordination',
        'Logistics, freight, and delivery management',
      ]}
      whoWeServe={[
        'US Department of Defense', 'Defense Logistics Agency', 'US Army', 'US Marine Corps',
        'SOCOM and Special Operations Commands', 'Department of Homeland Security',
        'Federal Bureau of Investigation', 'US Marshals Service',
        'Qatar Ministry of Interior', 'Iraq Security Forces',
        'Jordan Armed Forces', 'Allied Ministry of Defense clients',
        'Foreign Security Forces via FMS', 'Law Enforcement Agencies',
      ]}
      advantage={[
        'Our Federal Firearms License and export authorization place Wraith in an extremely small category of small businesses legally authorized to transact in this product area. The majority of our competitors — even those operating at far larger scale — cannot legally touch this category. That restriction is our market.',
        'Over decades of in-theater work across Iraq, Qatar, Jordan, and the broader MENA region, we have built direct relationships at the ministry level with the decision makers who govern defense procurement. When a new requirement emerges, we are already known. That relationship cannot be replicated by a new entrant, and it drives the sole-source awards that define our track record in this capability area.',
      ]}
      relatedLinks={[
        { to: '/capabilities/fms', label: 'Foreign Military Sales' },
        { to: '/capabilities/tactical', label: 'Tactical Equipment' },
      ]}
    />
  );
}
