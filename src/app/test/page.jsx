"use Client";

// import LivePerformance from "@/components/home/LivePerformance";
// import Main from "@/components/home/Main";
// import Performance from "@/components/home/Performance";
// import Reviews from "@/components/home/Reviews";

import { useSelector, useDispatch, Provider } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../GlobalRedux/Feauters/counter/counterSlice";
import { store } from "../GlobalRedux/store";

// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "./GlobalRedux/Feauters/counter/counterSlice";
export default function Home() {
  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("hello", store);
  return (
    <Provider store={store}>
      <div className="bg-black">
        <div className="h-screen">
          <button className={styles.button} onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button className={styles.button} onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button className={styles.button} onClick={() => dispatch(incrementByAmount(2))}>
            Increment by 2
          </button>
        </div>

        {/* <Main />
      <Performance />
      <LivePerformance />
      <Reviews /> */}
      </div>
    </Provider>
  );
}
