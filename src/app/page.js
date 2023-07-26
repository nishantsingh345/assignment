import LivePerformance from "@/components/home/LivePerformance";
import Main from "@/components/home/Main";
import Navbar from "@/components/home/Navbar";
import Performance from "@/components/home/Performance";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <Main />
      <Performance />
      <LivePerformance />
    </div>
  );
}
