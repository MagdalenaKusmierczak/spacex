import { BallTriangle } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#f4bf69"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};
