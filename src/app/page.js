import Image from "next/image";
import banner2 from "../../public/hero-shape2.png";
import banner1 from "../../public/hero-img.png.png";
import JobSection from "@/components/JobSection";
import TalentSection from "@/components/TalentSection";
export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-2 bg-gray-100">
        <div className="my-40 space-y-12 z-30">
          <p className="text-2xl text-gray-500 font-semibold">Easiest way to find a perfect job</p>
          <h1 className="text-7xl font-bold text-text-color">Find Your Next Dream Job</h1>
          <div>
            <button className="btn-slide mr-2">Looking For A job?</button>
            <button className="btn-secondary hover:bg-secondary-color">Find Talent</button>
          </div>
        </div>
        <div className="relative">
          <div className="hero-bg z-30">
          <Image className="w-full h-4/5 absolute -bottom-16 -left-16" src={banner1} alt="" height={486} width={572}/>
          </div>
        </div>
        <div className="absolute z-10 bottom-40 right-0 left-0 h-1/2 text-center">
          <h1 className="font-bold text-[450px] text-white">JOBS</h1>
        </div>
      </section>
      <JobSection></JobSection>
      <TalentSection />
    </div>
  );
}
