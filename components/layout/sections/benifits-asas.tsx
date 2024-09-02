import React from 'react';

const BenefitCard = ({ title, items }: { title: string; items: { id: string; title: string; description: string }[] }) => (
  <div className="shadow-xl transition ease-in-out delay-100 hover:scale-110  bg-black-100/[0.5] border border-gray-800 rounded-3xl  p-6 space-y-6 z-50">    
    <h2 className="text-2xl animate-bounce  font-bold font-sans text-white">{title}</h2>
    {items.map((item) => (
      <div key={item.id} className="space-y-2">
        <h3 className="text-lg font-extrabold font-sans text-gray-700">{item.id} {item.title}</h3>
        <p className="text-white font-sans">{item.description}</p>
      </div>
    ))}
  </div>
);

const BenefitsAsas = () => {
  const benefitsData = [
    { id: '01', title: 'No Recruitment Hassles', description: 'Our AI augmentation services save your company the hassle of searching and recruiting vetted development talent. We take over the screening process and send you approved CVs.' },
    { id: '02', title: 'Lower Operational Costs', description: 'Reduce your company spending by eliminating the costs of office space, equipment, and taxes. Pay for what drives the most value for your company.' },
    { id: '03', title: 'Fewer Legal Hassles', description: 'Within our AI augmentation services, we remain the official employers of your hires. Our company takes care of all legal responsibilities and documentation.' },
    { id: '04', title: 'Access to Vetted & Well Trained Team', description: 'The Data Island offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists.' },
    { id: '05', title: 'Timely Deliveries', description: 'Ramp up your technical capacity, when chasing a stringent deadline. Our team of developers dedicates their efforts to delivering the project in time.' },
    { id: '06', title: 'Full Control', description: 'We encourage you to cherry-pick your team members and participate in the screening process. Manage your project success and stay updated on all changes.' },
  ];

  const whyUsData = [
    { id: '01', title: 'Motivated Developers', description: 'Get motivated developers with an AI augmentation model. Although the developers provided by the vendor are not your direct employees, they seamlessly integrate into your project.' },
    { id: '02', title: 'Full Support', description: 'We assign an account manager to each client to discuss your needs and find the right solution. Your remote team members get the necessary administrative, HR, accounting, and legal support.' },
    { id: '03', title: 'The Cooperation Of Any Length', description: "You can extend your in-house AI department on a temporary or permanent basis within our flexible model. Whether it's a short-term or a long-term project, we have a viable solution for all needs." },
    { id: '04', title: 'Direct Communication', description: "There won't be any mediator between you and your extended team - you can set up calls, standups, and meetings when it's needed according to your schedule. Have one-to-ones with your team just like you do on-site." },
    { id: '05', title: 'Simple Extension', description: 'Start your cooperation with The Data Island by hiring individual developers for a short period and ramp up your remote development team as you go. Scale down your outsourced team when the project is over.' },
    { id: '06', title: 'Flexible Project Management', description: 'Manage your team directly to maintain full control over your project. You can also assign a part-time or full-time project manager who will take over management tasks.' },
  ];

  return (
    <div id='benifits-asas' className="relative container mx-auto px-4 py-16 shadow-xl bg-gray-900/[0.91] border border-gray-800 pb-6 pt-6 rounded-2xl ">
        <div className="absolute inset-1/3 w-96 h-96 bg-gradient-to-tl from-teal-500 to-teal-600 to-50% rounded-lg rotate-12 blur-[200px]" />
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitCard title="Benefits of Our AI Staff Augmentation Services" items={benefitsData} />
        <BenefitCard title="Why The Data Island?" items={whyUsData} />
      </div>
    </div>
  );
};

export default BenefitsAsas;