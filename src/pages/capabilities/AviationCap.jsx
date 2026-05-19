import React from 'react';
import { Link } from 'react-router-dom';
import CapabilityPage from '../../components/CapabilityPage';

export default function AviationCap() {
  return (
    <CapabilityPage
      tag="Capability 05"
      title={<>Aviation<br /><em style={{ color: '#f0efed', fontStyle: 'italic' }}>Services</em></>}
      heroSrc="/img-aviation.jpg"
      heroOverlay={0.72}
      intro="Military and civilian aviation capability delivered through Automata Aviation, a Wraith International company. Products, training, ATC, and support — under one contract."
      body={[
        'Aviation services at Wraith are delivered through Automata Aviation — a dedicated aviation division purpose-built to serve the growing intersection of government contracting and aviation requirements across domestic and international markets. Automata operates as a Wraith company, benefiting from our procurement infrastructure, regulatory authorizations, and government relationships while maintaining the specialized expertise the aviation market demands.',
        'Automata provides military and civilian clients with aviation products, crew training programs, technical maintenance instruction, air traffic control services, and aviation support infrastructure. Programs range from single-engagement pilot qualification training to multi-year aviation capability development contracts delivered in-country.',
        'The combination of Wraith\'s procurement and export authorization with Automata\'s aviation specialization allows us to deliver complete aviation programs — from equipment procurement through crew qualification and facility development — under a single contract with a single point of accountability. Clients do not need to manage separate vendors for each component of their aviation program.',
        'Our international reach extends Automata\'s capability into markets where domestic aviation companies cannot operate without the kind of government relationships and export authorization that Wraith maintains. Allied air forces, foreign ministry aviation units, and civil aviation authorities in partner nations can access Automata\'s capability through the same trusted channel they use for Wraith\'s defense procurement.',
      ]}
      services={[
        'Military aviation product procurement and delivery',
        'Pilot qualification and type rating training',
        'Aircraft technician and maintenance training',
        'Air traffic control services and staffing',
        'Aviation English language training — ICAO standards',
        'Aircraft support equipment and ground support',
        'Aircraft conversion and configuration modification',
        'Civil aviation authority development support',
        'Aviation safety management system development',
        'In-country aviation training program delivery',
      ]}
      whoWeServe={[
        'US Air Force', 'US Army Aviation Commands',
        'Allied Air Forces', 'Foreign Ministry Aviation Units',
        'Civil Aviation Authorities', 'Department of State',
        'Coalition Aviation Programs', 'Government Contract Operators',
        'Military Training Establishments', 'Aviation Authority Inspectors',
      ]}
      advantageTitle="The Automata Difference"
      advantage={[
        'Automata Aviation is not a general contractor that has added aviation to its capability list. It is a dedicated aviation division built by professionals with aviation operational experience — people who understand the regulatory environment, the technical requirements, and the operational standards that government aviation clients demand. That specialization is combined with Wraith\'s contracting infrastructure to create a capability that neither organization could offer independently.',
        'For allied governments and partner nations building or expanding aviation capability, the combination of Wraith\'s established relationships and Automata\'s aviation expertise represents a single source for the complete program. Equipment, training, ATC services, facility support — consolidated under one contract, one point of contact, one accountable partner. This integration is not incidental. It is the design.',
      ]}
      extraCtas={[
        { label: 'Visit Automata Aviation', href: 'https://automataaviation.com', external: true },
      ]}
      relatedLinks={[
        { to: '/capabilities/training', label: 'Training Services' },
      ]}
    />
  );
}
