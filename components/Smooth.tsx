import ReactLenis from "lenis/react";
import { ReactNode } from "react";

interface LenisProps {
  children: ReactNode;
}

const Smooth = ({ children }: LenisProps) => {
  return <ReactLenis root={true}>{children}</ReactLenis>;
};
export default Smooth;
