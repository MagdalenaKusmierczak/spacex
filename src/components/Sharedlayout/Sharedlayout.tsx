import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AnimatedStars from "../AnimatedStart/AnimatedStars";
import Loader from "../Loader/Loader";
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

// This is only a suggestion, but pretty common in big projects - use named exports instead of default ones
// This way, most IDEs can use the names in imports predictably - it makes refactoring easier as well.
export default Sharedlayout;
