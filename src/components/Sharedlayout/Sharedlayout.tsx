import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Sharedlayout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AnimatedStars from "../AnimatedStart/AnimatedStars";

const Sharedlayout = () => {
  return (
    <>
      <Container>
        <AnimatedStars />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet /></Suspense>
        <Footer />
      </Container>
    </>
  );
};

export default Sharedlayout;
