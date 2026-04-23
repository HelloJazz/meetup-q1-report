import React from 'react';

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="section-container bg-white pb-32 font-montserrat">
      <div className="max-w-6xl mx-auto px-6">
        {/* 10. Operational Performance */}
        <div className="mb-32">
          <div className="text-center mb-16 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark-blue tracking-tight uppercase">
              Operational Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-start px-6">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <h3 className="text-sm font-black text-white p-4 bg-brand-yellow tracking-widest text-center">
                Objective Status
              </h3>
              <table className="w-full text-xs md:text-sm text-left border-collapse text-black">
                <thead>
                  <tr className="border-b border-gray-100 uppercase text-[10px]">
                    <th className="p-4 font-bold">Objective</th>
                    <th className="p-4 font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50"><td className="p-4 font-bold">Execution on schedule</td><td className="p-4 text-right font-black text-green-600 italic">Achieved</td></tr>
                  <tr className="border-b border-gray-50"><td className="p-4 font-bold">Full curriculum delivery</td><td className="p-4 text-right font-black text-green-600 italic">Achieved</td></tr>
                  <tr className="border-b border-gray-50"><td className="p-4 font-bold">Community activation</td><td className="p-4 text-right font-black text-green-600 italic">Achieved</td></tr>
                  <tr className="text-black"><td className="p-4 font-bold">Satisfaction (~80%)</td><td className="p-4 text-right font-black text-green-600 italic">Achieved</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <h3 className="text-sm font-black text-white p-4 bg-brand-yellow tracking-widest text-center">
                Variable Metric
              </h3>
              <table className="w-full text-xs md:text-sm text-left border-collapse text-black">
                <thead>
                  <tr className="border-b border-gray-100 uppercase text-[10px]">
                    <th className="p-4 font-bold">Variable Metric</th>
                    <th className="p-4 font-bold">Observation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50"><td className="p-4 font-bold">Attendance</td><td className="p-4">Dependent on venue type</td></tr>
                  <tr className="border-b border-gray-50"><td className="p-4 font-bold">Reach</td><td className="p-4">Dependent on format</td></tr>
                  <tr className="text-black"><td className="p-4 font-bold">POAP distribution</td><td className="p-4">Lower in hybrid environments</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center italic px-6">
            These variations reflect differences in engagement patterns rather than inconsistencies in execution, within the boundaries of a deliberately lean operational model.
          </p>
        </div>

        {/* 11. Financial & Resource Efficiency */}
        <div className="mb-32 py-24 border-t border-gray-100 px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark-blue tracking-tight uppercase">
              Financial & Resource Efficiency
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-12 text-base md:text-lg text-muted-foreground leading-relaxed">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6 mx-6">
              <p className="font-bold text-brand-dark-blue italic border-b pb-4">
                All events were executed under a resource-conscious model, prioritizing educational delivery and community experience within a constrained operational framework.
              </p>
              <ul className="space-y-4 font-bold text-gray-700 list-disc pl-5">
                <li>strategic use of available venues</li>
                <li>focus on essential logistics</li>
                <li>reliance on contributions from speakers and organizers</li>
              </ul>
            </div>
            
            <div className="space-y-8 text-justify md:text-center px-8">
              <p>Operating across multiple cities required additional coordination and mobility, particularly for events outside Mexico City.</p>
              <p>Within these conditions, the program delivered consistent curriculum execution, hands-on learning experiences, and sustained community engagement.</p>
            </div>

            <div className="bg-brand-red text-white p-10 rounded-[3rem] text-center shadow-xl mx-6">
               <p className="font-bold leading-relaxed text-lg md:text-xl">
                 The results reflect a model capable of generating meaningful impact under constrained conditions, while also indicating the potential for deeper participant experience and expanded reach with increased capacity.
               </p>
            </div>
          </div>
        </div>

        {/* 12. Conclusion */}
        <div className="py-24 border-t border-gray-200">
          <div className="text-center mb-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue tracking-tighter uppercase px-6">
              Conclusion
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-12 text-base md:text-lg text-muted-foreground leading-relaxed px-6">
            <p className="font-bold text-brand-dark-blue text-center mb-12 italic border-b pb-8">
              Q1 2026 validated Meetups Frutales as an effective and adaptable model for Ethereum onboarding in Mexico.
            </p>

            <div className="space-y-8">
               <p className="font-bold text-gray-700 text-center">The program demonstrated that:</p>
               <ul className="grid md:grid-cols-2 gap-4">
                 {[
                   "educational consistency can coexist with contextual adaptability",
                   "participants can move from learning to direct interaction with Web3 tools",
                   "academic environments can significantly expand reach and onboarding capacity",
                   "community engagement can extend beyond individual events"
                 ].map((item, idx) => (
                   <li key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center text-center justify-center font-bold text-sm text-brand-dark-blue leading-tight">
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="bg-brand-dark-blue text-white p-12 rounded-[4rem] text-center shadow-[0_20px_50px_rgba(8,112,184,0.3)] mt-20 mx-6">
              <p className="text-lg md:text-2xl font-bold leading-snug italic">
                "The combination of consistent delivery, contextual adaptability, and emerging institutional connections positions the program not only as a series of events, but as a scalable educational and ecosystem-building initiative with strong potential for continued growth."
              </p>
            </div>
          </div>

          <div className="pt-32 text-center opacity-20">
              <div className="font-extrabold text-[10px] tracking-[0.8em] mb-2 uppercase text-brand-dark-blue">End of Consolidated Report</div>
              <div className="text-[9px] font-bold text-brand-red">Q1 2026 | MEXICO STATE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
