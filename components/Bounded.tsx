import React, { ReactNode } from "react";
import { clsx } from "clsx";

interface BoundedProps {
  children: ReactNode;
  className?: string;
}

const Bounded = ({ children, className }: BoundedProps) => {
  return (
    <section
      className={clsx("container mx-auto px-4 py-24 2xl:px-0", className)}
    >
      {children}
    </section>
  );
};
export default Bounded;
