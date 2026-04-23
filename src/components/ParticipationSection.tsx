import React from 'react';

const ParticipationSection = () => {
  return (
    <section id="participation" className="section-container bg-white font-montserrat">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-yellow tracking-tight">
            Participation Dynamics & Audience Behavior
          </h2>
          <p className="text-muted-foreground mt-2 font-medium italic">Behavioral Analysis</p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <h3 className="text-sm font-black text-white p-4 bg-brand-yellow tracking-widest text-center">
              Registration vs Attendance
            </h3>
            <table className="w-full text-xs md:text-sm text-left border-collapse text-black">
              <thead>
                <tr className="border-b border-gray-100 uppercase tracking-tighter text-[10px]">
                  <th className="p-4 font-bold">Event</th>
                  <th className="p-4 font-bold text-center">Registrations</th>
                  <th className="p-4 font-bold text-center">Attendance</th>
                  <th className="p-4 font-bold text-center">Conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50"><td className="p-4 font-bold">Mexico City</td><td className="p-4 text-center">41</td><td className="p-4 text-center">18</td><td className="p-4 text-center font-bold">44%</td></tr>
                <tr className="border-b border-gray-50"><td className="p-4 font-bold">Puebla</td><td className="p-4 text-center">21</td><td className="p-4 text-center">15</td><td className="p-4 text-center font-bold">71%</td></tr>
                <tr className="text-black"><td className="p-4 font-bold">Universidad de Oriente, Puebla</td><td className="p-4 text-center">21</td><td className="p-4 text-center font-bold">71</td><td className="p-4 text-center font-bold">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-20 space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
          <p>Each event revealed a distinct participation pattern.</p>
          <p>
            In Mexico City, attendance closely followed registration, indicating intentional participation and a predictable funnel. In Puebla, higher conversion suggests a more committed and self-selected audience. In contrast, Universidad de Oriente, Puebla shows a significant divergence between registration and attendance, driven by offline diffusion and institutional dynamics.
          </p>

          <div className="bg-brand-dark-blue text-white p-10 rounded-[2rem] text-center shadow-lg">
            <h4 className="font-bold text-brand-light-blue text-xs uppercase tracking-widest mb-4 italic">Key Insight:</h4>
            <p className="font-bold text-lg md:text-xl mb-6 leading-tight">
              Registration-based metrics behave differently depending on the environment.
            </p>
            <ul className="text-sm opacity-90 space-y-4 text-left max-w-md mx-auto list-disc pl-5 font-medium">
              <li>In community-driven or independent settings, they are a reliable indicator of intent.</li>
              <li>In academic environments, participation is more organic and influenced by proximity, peer networks, and institutional endorsement.</li>
            </ul>
            <p className="mt-8 pt-6 border-t border-white/10 text-brand-light-blue font-bold">
              This highlights an important dimension of the program: distribution is not only digital—it is social and contextual.
            </p>
          </div>
        </div>

        {/* AUDIENCE COMPOSITION */}
        <div className="py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center mb-16 px-6">
            <h3 className="text-xl md:text-2xl font-bold text-brand-yellow uppercase mb-6 tracking-tight">Audience Composition</h3>
            <p className="text-muted-foreground font-medium italic">Audience composition varied significantly across events, demonstrating the program’s ability to engage participants at different stages of familiarity with Web3.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto px-6">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
               <span className="text-xs font-black text-brand-dark-blue block mb-4 uppercase tracking-[0.2em]">Mexico City</span>
               <p className="text-sm font-semibold text-gray-600">balanced mix across experience levels</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
               <span className="text-xs font-black text-brand-red block mb-4 uppercase tracking-[0.2em]">Puebla</span>
               <p className="text-sm font-semibold text-gray-600 leading-tight">skewed toward early adopters and technically curious participants</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-blue-100 text-center ring-1 ring-brand-light-blue ring-offset-2">
               <span className="text-xs font-black text-brand-light-blue block mb-4 uppercase tracking-[0.2em]">Universidad</span>
               <p className="text-sm font-bold text-brand-dark-blue leading-tight">100% first-time participants, primarily students</p>
            </div>
          </div>

          <div className="bg-brand-red text-white p-12 rounded-[3.5rem] shadow-xl max-w-2xl mx-auto mx-6 text-center">
             <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-6 text-brand-yellow">Impact Perspective:</h4>
             <p className="mb-6 font-medium">The program demonstrated the ability to operate across the full onboarding spectrum:</p>
             <ul className="space-y-3 mb-10 list-disc pl-5 font-bold inline-block text-left">
               <li>introducing completely new users to Web3</li>
               <li>engaging intermediate participants</li>
               <li>and supporting technically inclined individuals</li>
             </ul>
             <p className="text-lg md:text-xl font-bold italic leading-tight pt-6 border-t border-white/10">
               This range is particularly relevant from an ecosystem perspective, as it connects initial onboarding with pathways toward deeper engagement and technical exploration.
             </p>
          </div>
        </div>

        {/* 5. ENGAGEMENT MODEL: HYBRID VS IN-PERSON */}
        <div className="py-24 border-t border-gray-100 px-6">
           <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-yellow uppercase tracking-tight">
                Engagement Model: Hybrid vs In-Person
              </h2>
           </div>

           <div className="max-w-2xl mx-auto mb-16 overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm font-montserrat">
             <h3 className="text-sm font-black text-white p-4 bg-brand-yellow tracking-widest text-center">
                Format Comparison
             </h3>
             <table className="w-full text-xs md:text-sm text-left border-collapse text-black">
               <thead>
                 <tr className="border-b border-gray-100 uppercase text-[10px]">
                   <th className="p-4 font-bold">Dimension</th>
                   <th className="p-4 font-bold">Hybrid Events</th>
                   <th className="p-4 font-bold">In-Person Event</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-gray-50"><td className="p-4 font-bold">Reach</td><td className="p-4">High</td><td className="p-4">Limited</td></tr>
                 <tr className="border-b border-gray-50"><td className="p-4 font-bold">Interaction type</td><td className="p-4">Mixed (live + remote)</td><td className="p-4">Direct</td></tr>
                 <tr className="border-b border-gray-50"><td className="p-4 font-bold">Content reuse</td><td className="p-4">Yes</td><td className="p-4">No</td></tr>
                 <tr><td className="p-4 font-bold">Engagement depth</td><td className="p-4">Moderate</td><td className="p-4">High</td></tr>
               </tbody>
             </table>
           </div>

           <div className="max-w-2xl mx-auto space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
             <p>The program tested both hybrid and fully in-person formats, each producing different types of outcomes.</p>
             <p>
               Hybrid events expanded reach and enabled remote participation without eliminating interaction, as seen in Mexico City where live chat contributed to real-time discussion. In Universidad de Oriente, Puebla, hybrid delivery amplified institutional visibility beyond the physical event.
             </p>
             <p>
               The Puebla event, while smaller in scale, generated more focused interaction and deeper peer-to-peer exchange.
             </p>
             <p className="font-bold text-brand-dark-blue border-t pt-8">
               These formats should be understood as complementary—they serve different strategic purposes:
             </p>
             <ul className="space-y-4 max-w-md mx-auto list-disc pl-5 font-bold text-left text-brand-dark-blue">
               <li>Hybrid formats maximize visibility and scalability</li>
               <li>In-person formats maximize depth and relationship-building</li>
             </ul>
             <p className="text-brand-yellow font-black text-sm uppercase tracking-widest pt-8">
                Together, they allow the program to balance reach and engagement within existing operational constraints.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;
