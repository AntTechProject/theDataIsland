import Footer from "@/components/layout/Footer";
import { NavbarTop } from "@/components/layout/NavBar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/services";


export default function generativeAI() {
  return (
    <main className="relative bg-black flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    {/* <h1>The Data Island</h1> */}
    <NavbarTop /> 
    <Hero />
    <Services />
    <Footer />  
    </div>
   </main>
  );
}
