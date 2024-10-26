import Image from "next/image";
import Goals from "@/asserts/images/goals.svg";
import Testing from "@/asserts/images/code-testing.svg";
import Reaserch from "@/asserts/images/research.svg";
import Bolt from "@/asserts/images/bolt.svg";
import Robot2 from "@/asserts/images/robot-2.svg";
import Robotics from "@/asserts/images/Robotics.svg";

const Teams = () => {
  return (
    <div className="">
      <div className="px-[7%] bg-[#0c7aad]/30 flex items-center justify-between">
        <h3 className="font-bold text-2xl">OurTeams</h3>
        <Image src={Goals} alt="Goals Image" width={300} />
      </div>
      <div className="my-5 flex flex-col lg:flex-row px-[7%] gap-5">
        <div className="flex-[2] bg-gradient-to-br from-primary to-[#0c7aad] p-5 rounded-[1rem] text-white flex flex-col items-start justify-center">
          <h2 className="text-4xl font-[700] mb-3">
            Software Development Team
          </h2>
          <p className="mt-4 tracking-wide text-xl font-[100] text-gray-300">
            We translate a project&apos;s goals into functional user experience,
            to analysing, evaluating and enhancing them over time.
          </p>
        </div>
        <div className="flex-[1] flex items-center justify-center bg-primary rounded-[1rem] p-5">
          <Image src={Testing} alt="testing" width={300} />
        </div>
      </div>

      {/* Hardware */}
      <div className="my-5 flex flex-col lg:flex-row px-[7%]">
        <div className="bg-primary rounded-[1rem] lg:rounded-none lg:rounded-l-[1rem] flex-[2] px-5 pt-20">
          <p className="mt-4 tracking-wide text-xl font-[100] text-gray-300">
            We translate a project&apos;s goals into functional user experience,
            to analysing, evaluating and enhancing them over time.
          </p>
          <div className="flex justify-end">
            <Image src={Robot2} alt="Rogot 2" />
          </div>
        </div>
        <div className="bg-[#0c7aad]/30 lg:mt-0 mt-5 rounded-[1rem] lg:rounded-none lg:rounded-r-[1rem] flex-[3] px-5 pt-20">
          <h2 className="text-4xl font-[700] mb-3 text-right">
            Hardware & <br /> Prototyping Team
          </h2>
          <div className="flex justify-end">
            <Image src={Robotics} alt="Robotics" width={490} />
          </div>
        </div>
      </div>

      {/* 3D MOdelling */}
      <div className="my-5 flex flex-col lg:flex-row px-[7%] gap-8">
        <div className="text-primary flex-[3] bg-gradient-to-tl from-[#0c5f8b] to-[#008fbb] rounded-[1rem] flex flex-col items-start justify-center">
          <div className="p-5">
            <h2 className="text-4xl font-[700] mb-3">3D Modelling Team</h2>
            <p className="mt-4 tracking-wide text-xl font-[100] w-full md:w-[70%]">
              We design 3D models using CAD software during project development
              to 3D print certain parts.
            </p>
          </div>
          <div className="w-full flex justify-end">
            <Image src={Bolt} alt="Bolt" />
          </div>
        </div>
        <div className="flex-[2] flex flex-col items-center justify-between bg-gradient-to-tr from-[#008fbb] to-white rounded-[1rem] p-5">
          <div className="flex flex-col items-center justify-center mb-3">
            <h2 className="text-4xl font-[700] text-center">
              Research <br /> Team
            </h2>
            <p className="mt-4 tracking-wide text-base font-[100] text-black w-full md:w-[60%] text-center">
              We collect information to assist the design and development of
              projects.
            </p>
          </div>
          <Image src={Reaserch} alt="testing" width={300} />
        </div>
      </div>
    </div>
  );
};
export default Teams;
