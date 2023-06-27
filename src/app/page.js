import Image from "next/image";
import banner2 from "../../public/hero-shape2.png";
import banner1 from "../../public/hero-img.png.png";
export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-2">
        <div className="my-40 space-y-12">
          <p className="text-2xl text-gray-500 font-semibold">Easiest way to find a perfect job</p>
          <h1 className="text-7xl font-bold text-text-color">Find Your Next Dream Job</h1>
          <div>
            <button className="btn-slide mr-2">Looking For A job?</button>
            <button className="btn-secondary">Find Talent</button>
          </div>
        </div>
        <div className="relative hero-bg">
          <Image className="my-40" src={banner1}/>
        </div>
      </section>
    </div>
  );
}
