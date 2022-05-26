import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import mslogo from "../styles/photos/maw-supply-7-yellow.png";

const paths = [
  ["Akoma Tee", "/akomaTee"],
  ["About", "/about"],
  ["Pins", "/pins"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
];
const MyNavbar = () => {
  const rPath = useRouter().pathname;
  return (
    <nav className="flex mx-auto px-10 justify-between items-center relative">
      <div className="relative">
        <Link href="/">
          <a>
            <div className="z-50">
              <Image src={mslogo} width={60} height={40} />
            </div>
          </a>
        </Link>
      </div>
      <ul className="flex pt-4 gap-4">
        {paths.map((path) => {
          return (
            <li className="relative" key={path[1]}>
              <Link href={path[1]}>
                <a className="font-medium text-xl hover:text-amber-300 no-underline">
                  {path[0]}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MyNavbar;
