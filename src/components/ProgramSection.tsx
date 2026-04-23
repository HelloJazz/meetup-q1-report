import React from 'react';

const ProgramSection = () => {
  return (
    <section id="program" className="section-container" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-red tracking-tight">
            Program Execution Summary
          </h2>
          <p className="text-muted-foreground mt-2 font-medium italic">Quantitative Analysis</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-stretch">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <h3 className="text-sm font-black text-white p-4 bg-brand-yellow tracking-widest text-center">
              Q1 Consolidated Metrics
            </h3>
            <div className="p-8 flex-1 flex flex-col justify-center">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-50 text-black">
                    <th className="py-2 font-bold">Metric</th>
                    <th className="py-2 text-right font-bold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50 text-black"><td className="py-2 font-medium">Events executed</td><td className="py-2 text-right font-bold">3</td></tr>
                  <tr className="border-b border-gray-50 text-black"><td className="py-2 font-medium">In-person attendees</td><td className="py-2 text-right font-bold">104</td></tr>
                  <tr className="border-b border-gray-50 text-black"><td className="py-2 font-medium">Remote reach (total)</td><td className="py-2 text-right font-bold">~2,790</td></tr>
                  <tr className="border-b border-gray-50 text-black"><td className="py-2 font-medium">Curriculum completion</td><td className="py-2 text-right font-bold">100%</td></tr>
                  <tr className="border-b border-gray-50 text-black"><td className="py-2 font-medium">Average satisfaction</td><td className="py-2 text-right font-bold">~80%</td></tr>
                  <tr className="text-black"><td className="py-2 font-medium">Interest in Q2</td><td className="py-2 text-right font-bold">90%+</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 flex flex-col">
              <h3 className="text-sm font-black text-white p-4 bg-brand-yellow tracking-widest text-center">
                Event-Level Comparison
              </h3>
              <div className="flex-1 flex flex-col justify-center overflow-x-auto">
                <table className="w-full text-[10px] md:text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-red text-white">
                      <th className="p-4 font-bold">City</th>
                      <th className="p-4 font-bold text-center">Format</th>
                      <th className="p-4 font-bold text-center">IRL Attendance</th>
                      <th className="p-4 font-bold text-center">Remote Reach</th>
                      <th className="p-4 font-bold">Audience Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50 text-black leading-tight">
                      <td className="p-4 font-bold">Mexico City</td>
                      <td className="p-4 text-center">Hybrid</td>
                      <td className="p-4 text-center font-bold">18</td>
                      <td className="p-4 text-center">469</td>
                      <td className="p-4">Mixed (beginner–intermediate)</td>
                    </tr>
                    <tr className="border-b border-gray-50 text-black leading-tight">
                      <td className="p-4 font-bold">Puebla</td>
                      <td className="p-4 text-center">In-person</td>
                      <td className="p-4 text-center font-bold">15</td>
                      <td className="p-4 text-center">—</td>
                      <td className="p-4">Tech-curious / early adopters</td>
                    </tr>
                    <tr className="text-black leading-tight">
                      <td className="p-4 font-bold">Universidad de Oriente, Puebla</td>
                      <td className="p-4 text-center">Hybrid</td>
                      <td className="p-4 text-center font-bold">71</td>
                      <td className="p-4 text-center">2,245</td>
                      <td className="p-4 font-bold">Students & academic community</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-24 px-6">
           <p className="text-base text-muted-foreground leading-relaxed text-justify md:text-center italic">
             While the numbers provide a baseline, the key outcome is the consistency of execution combined with variability of results, which offers valuable insight into how different environments shape participation and engagement, particularly when operating with limited logistical and financial flexibility.
           </p>
        </div>

        <div className="max-w-4xl mx-auto py-16 border-t border-gray-200 px-6 font-montserrat">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-red tracking-tight mb-2">
              Curriculum Delivery & Educational Model
            </h2>
            <p className="text-muted-foreground">All three events followed a standardized three-track structure:</p>
          </div>

          <div className="overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto mb-16">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-brand-red text-white uppercase tracking-widest text-[10px]">
                  <th className="p-4 font-bold">Track</th>
                  <th className="p-4 font-bold text-center">Duration</th>
                  <th className="p-4 font-bold">Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50 text-black">
                  <td className="p-4 font-bold">Onboarding & Fundamentals</td>
                  <td className="p-4 text-center">45 min</td>
                  <td className="p-4">Wallets, security, network types</td>
                </tr>
                <tr className="border-b border-gray-50 text-black">
                  <td className="p-4 font-bold">Introduction to DeFi</td>
                  <td className="p-4 text-center">45 min</td>
                  <td className="p-4">Protocols, terminology, TradFi comparison</td>
                </tr>
                <tr className="text-black">
                  <td className="p-4 font-bold">AI as Learning Assistant</td>
                  <td className="p-4 text-center">45 min</td>
                  <td className="p-4">Tools, automation, learning support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center px-6">
            <p>
              This consistency enabled the program to maintain a cohesive learning journey across locations, compare outcomes across different audience types, and validate the curriculum as a scalable educational framework.
            </p>
            
            <div className="bg-brand-red text-white p-10 rounded-[2.5rem] text-center shadow-lg">
              <p className="font-bold text-lg md:text-xl leading-tight italic mb-6">
                "What stands out is not only that the curriculum was delivered, but that it adapted naturally to each audience."
              </p>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                In Mexico City, it functioned as a structured introduction for mixed-experience participants. In Puebla, it enabled deeper conceptual discussions among more self-directed attendees. In Universidad de Oriente, Puebla, it became a hands-on onboarding tool for first-time users.
              </p>
            </div>

            <p className="text-base md:text-lg text-brand-dark-blue font-bold text-center">
              This flexibility indicates that the model operates as a transferable learning system rather than a fixed content structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
