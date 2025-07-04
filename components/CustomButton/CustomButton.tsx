import React from "react";
import "./custombutton.css";
import Link from "next/link";
import clsx from "clsx";

interface CustomButtonProps {
  text: string
  href: string
  className?:string
}

const CustomButton = ({ text,href,className }: CustomButtonProps) => {
  return (
    <Link href={href} className={clsx("btn-17",className)}>
      <span className="text-container">
        <span className="text">{text}</span>
      </span>
    </Link>
  );
};
export default CustomButton;
