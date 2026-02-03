import Image from "next/image";
import OptionCard from "@/components/OptionCard";

export default function Home() {

  const options = [
    { id: 1, name: "LiveBooks", link: "/pages/livebooks", color:"#8CAAAF" ,img:"https://kalvium.community/assets/launcher-livebooks-logo-13706a15.svg"},
    { id: 2, name: "Assignments", link: "/pages/assignments", color:"#B9A2A7", img:"https://kalvium.community/assets/launcher-attempts-logo-a9da57a5.svg" },
    { id: 3, name: "Results", link: "/pages/results", color:"#97ABC3", img:"https://kalvium.community/assets/launcher-marker-logo-7606926f.svg" },
    { id: 4, name: "Attendance", link: "/pages/attendance", color:"#8B869B" , img:"https://kalvium.community/assets/launcher-attendance-hub-logo-aa95b0f4.svg" },
  ];

  return (
    <div className="min-h-screen w-full">

      {/* -------- Header -------- */}
      <section>
        <div className="w-full h-[10vh] flex items-center justify-between px-4 border-b">

          {/* <Image
            src="https://ggu.edu.in/wp-content/uploads/2025/03/ggu-new-logo.png"
            alt=""
            className="h-[5vh]"
            width={100}
            height={100}
          /> */}

        </div>
      </section>

      {/* -------- Section 2 -------- */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center mt-10 gap-10 px-10 py-10">

        {/* LEFT BLOCK */}
        <div className="h-[60vh] w-full md:w-1/2 flex flex-col sm:flex-row">

          <div className="border w-full sm:w-1/2 h-1/2 sm:h-full" />

          <div className="border border-t-0 sm:border-t sm:border-l-0 w-full sm:w-1/2 h-1/2 sm:h-full" />

        </div>

        {/* RIGHT BLOCK (buttons grid wrapper stays here) */}
        <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {options.map((item) => (
            <OptionCard key={item.id} item={item} />
          ))}
        </div>

      </section>

    </div>
  );
}
