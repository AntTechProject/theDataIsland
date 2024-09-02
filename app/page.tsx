import Hero from "@/components/layout/sections/Hero";
import StaffAug from "@/components/layout/sections/staff-aug";
import StaffServices from "@/components/layout/sections/staff-services";
import StaffProcess from "@/components/layout/sections/staff-process";
import AIProcess from "@/components/layout/sections/ai-process";
import AugmentedTeams from "@/components/layout/sections/augmented-teams";
import Benifits_Asas from "@/components/layout/sections/benifits-asas";
import Testimonials from "@/components/layout/sections/testimonials";
import FAQ from "@/components/layout/sections/faq";
import Footer from "@/components/layout/Footer";
import MainTechStack from "@/components/layout/sections/technical-stack/main-tech-stack";
import { NavbarTop } from "@/components/layout/NavBar";



export default function Home() {
  return (
  //  <main className="relative bg-black-100 flex justify-center 
  //  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
  <main className="relative flex justify-center bg-gradient-to-b from-black-100 
  from-20% via-black to-black-100 to-50%
  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      {/* <h1>The Data Island</h1> */}
      <NavbarTop />
      <Hero />
      <StaffAug />
      <StaffServices />
      <StaffProcess />
      <AIProcess />
      <AugmentedTeams />
      <MainTechStack />
      <Benifits_Asas/>
      <Testimonials />
      <FAQ />      
      <Footer />      
    </div>
   </main>
  );
}
