import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Sharedlayout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AnimatedStars from "../AnimatedStart/AnimatedStars";

const Sharedlayout = () => {
  return (<>
    <Container><AnimatedStars/><Header/>
      <Suspense
      //   fallback={<Loader />}
      ></Suspense>
          <Outlet />
          <Footer/>
    </Container></>
  );
};

export default Sharedlayout;
