import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Sharedlayout = () => {
  return (
    <div><Header/>
      <Suspense
      //   fallback={<Loader />}
      ></Suspense>
          <Outlet />
          <Footer/>
    </div>
  );
};

export default Sharedlayout;
