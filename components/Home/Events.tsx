import Robot from "@/asserts/images/robot.png";
import Image from "next/image";

const Events = () => {
  const events = [
    {
      title: "Acity Tech Expo",
      location: "Academic City College, Accra",
    },
    {
      title: "Acity Tech Expo",
      location: "Academic City College, Accra",
    },
    {
      title: "Acity Tech Expo",
      location: "Academic City College, Accra",
    },
    {
      title: "Acity Tech Expo",
      location: "Academic City College, Accra",
    },
  ];

  return (
    <div>
      <div className="px-[7%] bg-[#0c7aad]/30 py-16 mt-10">
        <h3 className="font-bold text-2xl">Upcoming Events</h3>
        <span>2024/2025</span>
      </div>

      <div className="px-[7%] my-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {events &&
          events.map((event) => (
            <div key={Math.random() * 20} className="h-[13rem] flex rounded-lg">
              <div className="bg-gray-400 h-full flex-[3] rounded-lg">
                <Image
                  src={Robot}
                  alt="Robot Image"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="flex-[5] p-4 rounded-r-lg border-l-none border-r-2 border-y-2 border-gray-400 h-[95%] my-auto flex justify-between flex-col">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <small className="border-[2px] border-blue-900 rounded-[2rem] py-1 px-2 w-fit">
                      12-03-2024
                    </small>
                    <small className="border-[2px] border-blue-900 rounded-[2rem] py-1 px-2 sm:mt-0 mt-2 w-fit">
                      7:00 am - 12:00 pm GMT
                    </small>
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl tracking-tight mt-3">
                    {event.title}
                  </h3>
                </div>
                <div>
                  <span className="font-semibold text-base sm:text-xl">
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button className="btn-round mx-auto w-fit">
        <span>View All Events</span>
      </button>
    </div>
  );
};
export default Events;
