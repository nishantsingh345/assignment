"use Client";

import LivePerformance from "@/components/home/LivePerformance";
import Main from "@/components/home/Main";
import Performance from "@/components/home/Performance";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <div>
      <Main />
      <Performance />
      <LivePerformance />
      <Reviews />
    </div>
  );
}
