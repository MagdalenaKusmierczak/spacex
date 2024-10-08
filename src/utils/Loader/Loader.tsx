import { BallTriangle } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#f4bf69"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};
export default Loader;
