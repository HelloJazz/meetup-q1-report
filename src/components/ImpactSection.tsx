import React from 'react';

const ImpactSection = () => {
  return (
    <section id="impact" className="section-container font-montserrat" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* 6. Community Development & Ecosystem Activation */}
        <div className="mb-32">
          <div className="text-center mb-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-tight">
              Community Development & Ecosystem Activation
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-12">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
               <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Across all events, consistent outcomes were observed:</h4>
               <ul className="space-y-4 text-gray-600 font-bold list-disc pl-5">
                 <li>New connections formed between participants</li>
                 <li>First-time attendees integrated into the Frutero community</li>
                 <li>Participants expressed interest in continuing engagement</li>
                 <li>Early-stage project ideas began to surface</li>
               </ul>
            </div>

            <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center px-6">
              <p>However, the nature of community activation differed by context.</p>
              <p>
                Mexico City served as a foundation for community building, combining new and returning participants. Puebla facilitated more intentional and technically oriented discussions. Universidad de Oriente, Puebla enabled rapid expansion through institutional onboarding, introducing a new segment of participants into the ecosystem.
              </p>
            </div>

            <div className="bg-gray-500 text-white p-10 rounded-[3rem] text-center shadow-xl mx-6">
               <p className="text-lg md:text-xl font-bold leading-relaxed italic">
                 "A notable moment was the active participation of university leadership in Universidad de Oriente, Puebla, which elevated the event from an isolated session to a shared institutional experience, reinforcing legitimacy and accelerating adoption."
               </p>
            </div>
          </div>
        </div>

        {/* 7. Educational Impact: From Awareness to Action */}
        <div className="mb-32 py-24 border-t border-gray-200">
          <div className="text-center mb-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-tight">
              Educational Impact: From Awareness to Action
            </h2>
            <p className="text-muted-foreground mt-2 italic font-medium">Participants across all events moved beyond theoretical understanding into practical interaction.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto px-6">
             <div className="bg-white p-8 rounded-3xl space-y-4 border border-gray-100">
                <h4 className="font-black text-xs uppercase tracking-widest text-gray-400">Observed outcomes included:</h4>
                <ul className="space-y-3 font-bold text-gray-600">
                  <li className="flex gap-2"><span>•</span> wallet creation and security practices</li>
                  <li className="flex gap-2"><span>•</span> execution of on-chain transactions</li>
                  <li className="flex gap-2"><span>•</span> exploration of DeFi mechanisms</li>
                  <li className="flex gap-2"><span>•</span> use of AI tools to support learning</li>
                </ul>
             </div>
             <div className="bg-brand-dark-blue text-white p-8 rounded-3xl flex items-center justify-center text-center">
                <p className="font-bold leading-relaxed">
                  In Universidad de Oriente, Puebla, this translated into real-time demonstrations of wallet usage and token distribution, reinforcing the practical dimension of the experience.
                </p>
             </div>
          </div>

          <p className="text-center text-xl font-black text-gray-400 uppercase tracking-tight max-w-xl mx-auto px-6">
            The significance lies in enabling first interaction with the technology, a critical step in transitioning from awareness to adoption.
          </p>
        </div>

        {/* 8. Role of AI as an Adoption Layer */}
        <div className="mb-32 py-24 border-t border-gray-200">
           <div className="text-center mb-16 px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase">Role of AI as an Adoption Layer</h2>
              <p className="text-muted-foreground italic font-medium mt-2">AI was consistently positioned as an enabling layer rather than a standalone topic.</p>
           </div>

           <div className="max-w-2xl mx-auto space-y-12">
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm mx-6">
                <h4 className="text-xs font-black text-gray-400 uppercase mb-6 tracking-widest">It supported:</h4>
                <ul className="space-y-4 font-bold text-gray-600">
                  <li className="flex gap-3"><span className="text-brand-red">01</span> a learning assistant for understanding complex concepts</li>
                  <li className="flex gap-3"><span className="text-brand-yellow">02</span> a bridge for non-technical participants to engage with Web3</li>
                  <li className="flex gap-3"><span className="text-brand-light-blue">03</span> a support layer for productivity for builders</li>
                </ul>
              </div>

              <div className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center italic px-8">
                <p>
                  In Mexico City, even technical challenges during a live demo became a valuable moment, exposing participants to the realities of building and reinforcing a culture of experimentation and resilience.
                </p>
              </div>

              <div className="bg-gray-500 text-white p-10 rounded-[3rem] text-center shadow-lg mx-6">
                <h4 className="text-xs font-black uppercase text-brand-light-blue mb-4">Key Insight:</h4>
                <p className="text-lg md:text-xl font-bold leading-tight">
                  AI significantly lowers the barrier to entry, positioning Web3 not only as a technical domain, but as an accessible space for broader audiences.
                </p>
              </div>
           </div>
        </div>

        {/* 9. Program-Level Signals & Emerging Opportunities */}
        <div className="py-24 border-t border-gray-200">
           <div className="text-center mb-16 px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase px-6">Program-Level Signals & Emerging Opportunities</h2>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 px-6">
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
                 <div>
                   <h4 className="font-black text-brand-red text-xs uppercase mb-4 tracking-widest">9.1 Model Validation</h4>
                   <ul className="space-y-3 text-sm font-bold text-gray-600 list-disc pl-5">
                      <li>A consistent curriculum can be deployed across diverse environments</li>
                      <li>Engagement quality can be maintained despite audience variability</li>
                      <li>The format is adaptable without losing coherence</li>
                   </ul>
                 </div>
                 <div className="pt-8 border-t border-gray-50">
                   <h4 className="font-black text-brand-yellow text-xs uppercase mb-4 tracking-widest">9.2 Context as a Growth Driver</h4>
                   <ul className="space-y-3 text-sm font-bold text-gray-600 list-disc pl-5">
                      <li>Context significantly influences scale and type of engagement</li>
                      <li>Academic institutions function as high-leverage distribution channels</li>
                      <li>Participant interest suggests continuity beyond single events</li>
                   </ul>
                 </div>
              </div>

              <div className="bg-brand-dark-blue text-white p-10 rounded-3xl flex flex-col justify-between">
                 <div>
                   <h4 className="font-black text-brand-light-blue text-xs uppercase mb-6 tracking-widest">9.3 Institutional Integration</h4>
                   <p className="mb-6 font-medium text-white/80">The Universidad de Oriente, Puebla event introduced a new dynamic:</p>
                   <ul className="space-y-4 font-bold text-lg mb-10 list-disc pl-5">
                      <li>direct engagement with academic stakeholders</li>
                      <li>onboarding of students at scale</li>
                      <li>potential for recurring collaboration</li>
                   </ul>
                 </div>
                 <p className="text-brand-light-blue font-bold italic pt-8 border-t border-white/10">
                   This signals a strong opportunity to position educational institutions as long-term partners in ecosystem expansion, rather than one-off venues.
                 </p>
              </div>
           </div>

           <div className="bg-gray-200 p-8 rounded-2xl text-center max-w-xl mx-auto mx-6">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Implication:</h4>
              <p className="text-xl font-bold text-gray-500 leading-tight">
                Future growth is not dependent on a single channel, but on the ability to operate across multiple environments.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
