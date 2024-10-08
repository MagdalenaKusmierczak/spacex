import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Sharedlayout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AnimatedStars from "../AnimatedStart/AnimatedStars";
import Loader from "../../utils/Loader/Loader";

const Sharedlayout = () => {
  return (
    <>
      <Container>
        <AnimatedStars />
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default Sharedlayout;
