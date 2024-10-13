import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import AnimatedStars from "components/AnimatedStart/AnimatedStars";
import Loader from "utils/Loader/Loader";
import { Container } from "./Sharedlayout.styled";

const Sharedlayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <AnimatedStars />
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Suspense>
  );
};

export default Sharedlayout;
