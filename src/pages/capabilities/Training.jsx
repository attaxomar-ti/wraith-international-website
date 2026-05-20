import React from 'react';
import CapabilityPage from '../../components/CapabilityPage';

export default function Training() {
  return (
    <CapabilityPage
      tag="Capability 06"
      title="TRAINING SERVICES"
      noPhoto
      intro="Specialized training programs for law enforcement, military, and government clients. Delivered domestically and in-theater internationally, designed for transfer."
      body={[
        'Wraith International designs and delivers specialized training programs for law enforcement, military, and government clients across domestic and international locations. Programs are developed to client specification and delivered by qualified instructors with direct operational experience in the subject matter — not by generalist trainers working from a curriculum they did not develop.',
        'Past training engagements have included law enforcement academy development and instruction in Iraq, police and security force training programs across the Gulf region, tactical instruction for security personnel protecting government facilities, and professional development programs delivered in-country for allied government personnel. Each engagement is designed to build lasting in-country capability, not to create dependency on an external training provider.',
        'Our training programs are built for transfer. We train instructors, develop locally-appropriate curricula, establish the documentation and assessment frameworks required for programs to continue after the contract period, and build the institutional capacity that allows client organizations to sustain and expand the capability we deliver. A training program that requires continuous external support is not a program — it is a subscription. Wraith delivers programs.',
        'The integration of our training capability with our equipment and procurement capability allows us to design and deliver complete programs — qualification training delivered alongside the equipment being trained on, in the facility that Wraith helped establish, under the protocols that Wraith helped develop. This integration eliminates the coordination failures that plague multi-vendor training programs.',
      ]}
      services={[
        'Law enforcement academy development and instruction',
        'Police and security force qualification training',
        'Tactical and operational training programs',
        'Train-the-trainer and instructor certification',
        'Curriculum development and program design',
        'In-country and in-theater training delivery',
        'Facility-based training program management',
        'Equipment familiarization and qualification training',
        'Leadership and management development',
        'Program evaluation and performance assessment',
        'Post-program support and sustainment planning',
      ]}
      whoWeServe={[
        'Iraqi Police and Security Forces', 'Afghan National Police',
        'Qatar Ministry of Interior Forces', 'Gulf Region Security Agencies',
        'US Federal Law Enforcement Agencies', 'Department of Homeland Security',
        'State and Local Law Enforcement', 'Military Advisory Programs',
        'Foreign Security Force Development Programs', 'Allied Government Academies',
      ]}
      advantageTitle="Capability That Lasts"
      advantage={[
        'Most training contracts produce trained personnel. The best training contracts produce training organizations. Wraith designs every program with sustainability as a primary requirement — the ability of the client organization to continue, expand, and adapt the program after our instructors have departed. This philosophy reflects operational experience: a force that requires continuous external training support is operationally dependent. A force trained to train itself is operationally capable.',
        'Our experience delivering in-country programs across conflict-affected environments and politically complex settings has produced an operational methodology that accounts for the realities of those environments: security constraints, logistical limitations, cultural and language considerations, and the practical requirements of training personnel who are actively managing security responsibilities while undergoing professional development. We design around these realities rather than assuming ideal conditions.',
      ]}
      relatedLinks={[
        { to: '/capabilities/tactical', label: 'Tactical Equipment' },
              ]}
    />
  );
}
