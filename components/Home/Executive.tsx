import React from "react";

const Executive: React.FC = () => {
  const executives = [
    {
      name: "Phillip Amoah",
      position: "President",
    },
    {
      name: "Adam Micheal",
      position: "President",
    },
    {
      name: "John Doe",
      position: "President",
    },
    {
      name: "Sara Smith",
      position: "President",
    },
    {
      name: "Phillip Amoah",
      position: "President",
    },
    {
      name: "Phillip Amoah",
      position: "President",
    },
    {
      name: "Phillip Amoah",
      position: "President",
    },
    {
      name: "Phillip Amoah",
      position: "President",
    },
  ];

  return (
    <div>
      <div className="px-[7%] bg-[#0c7aad]/30 py-16 mt-10">
        <h3 className="font-bold text-2xl">Our Executive Board</h3>
        <span>2024/2025</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-[7%] my-10">
        {executives &&
          executives.map(({ name, position }) => (
            <div
              key={Math.random() * 20}
              className="border-2 border-black rounded-lg"
            >
              <div className="w-full h-[18rem] bg-gray-300 rounded-t-lg"></div>
              <div className="p-5">
                <span className="text-xl">{name}</span> <br />
                <small className="text-base">{position}</small>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Executive;
