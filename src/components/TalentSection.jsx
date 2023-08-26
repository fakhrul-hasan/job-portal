import React from "react";
import Image from "next/image";
import talentBanner from "../../public/talent.png";

const TalentSection = () => {
  return (
    <section className="bg-gray-100 py-44 relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 px-8">
          <Image
            className="h-screen w-full"
            src={talentBanner}
            alt=""
            height={570}
            width={546}
          />
        </div>
        <div className="col-span-1 space-y-8 px-8 z-20">
          <h1 className="text-6xl font-semibold text-text-color capitalize">
            we build lasting relationships beween candidates & businesses
          </h1>
          <p className="text-gray-400 font-normal text-lg">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes. Placeholder text commonly
            used.
          </p>
          <p className="text-gray-400 font-normal text-lg">
            Automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes. Placeholder text commonly
            used.
          </p>
          <div>
            <button className="btn-slide mr-2 uppercase">find talent</button>
          </div>
        </div>
      </div>
      <div className="absolute z-10 -bottom-44 right-0 left-0 h-1/2 text-center">
          <h1 className="font-extrabold text-[250px] text-white uppercase">talents</h1>
        </div>
    </section>
  );
};

export default TalentSection;
