import React from "react";
import CustomButton from "@/components/CustomButton/CustomButton";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={""}>
      <div
        className={
          "font-manrope flex min-h-[10vh] w-full flex-col items-center justify-center gap-6 bg-sky-500 py-6 font-bold md:flex-row"
        }
      >
        <div className={"flex flex-col gap-6 md:flex-row"}>
          <CustomButton
            text={"Book Now"}
            href={"/book"}
            className={"bg-brand-black! font-manrope! text-sm!"}
          />
          <CustomButton
            text={"Call Now"}
            href={"tel:5405158283"}
            className={"bg-brand-black! font-manrope! text-sm!"}
          />
        </div>
        OR
        <CustomButton
          text={"Airo Fix Ai"}
          href={"/chat"}
          className={"bg-brand-black! font-manrope! text-sm!"}
        />
      </div>
      <footer className="bg-brand-black text-brand-offwhite relative overflow-hidden px-6 pt-16 pb-10 md:px-16">
        <div className="mb-10 text-center">
          <h3 className="mb-2 text-xl font-medium md:text-2xl">
            Breathe in the Difference
          </h3>
          <p className="text-brand-green mt-2 text-sm tracking-wide uppercase">
            — AiroFix
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center justify-center gap-6 md:flex-row">
          <Link
            href="/book"
            className="bg-brand-green rounded-full px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Book a Cleaning
          </Link>
          <Link href="#faqs" className="hover:text-brand-green transition">
            FAQ
          </Link>
          <Link href="#coverage" className="hover:text-brand-green transition">
            Coverage
          </Link>
        </div>

        <div className="no-scrollbar mb-10 flex justify-center gap-6 overflow-x-auto px-2 text-sm whitespace-nowrap">
          {[
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Texas",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Nebraska",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming",
          ].map((city) => (
            <span
              key={city}
              className="text-gray-600 transition hover:text-black"
            >
              {city}
            </span>
          ))}
        </div>

        <div className="mb-6 flex justify-center gap-6 text-xl">
          <Link href="#" className="hover:text-brand-green transition">
            <FaFacebookF />
          </Link>
        </div>

        <p className="text-brand-gray text-center text-xs">© 2025 AiroFix</p>
      </footer>
    </section>
  );
};
export default Footer;
