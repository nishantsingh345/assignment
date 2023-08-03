"use Client";

import LivePerformance from "@/components/home/LivePerformance";
import Main from "@/components/home/Main";
import Performance from "@/components/home/Performance";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  // const count = useSelector((state) => state.counter.value);

  return (
    <div className="bg-black">
      <Main />
      <Performance />
      <LivePerformance />
      <Reviews />
    </div>
  );
}
