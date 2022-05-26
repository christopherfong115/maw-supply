import Head from "next/head";
import React from "react";
import MyNavbar from "../components/MyNavbar";
import aboutImage from "../styles/photos/about.png";
import { motion } from "framer-motion";
import Image from "next/image";
import botImg from "../styles/photos/week-1-1_orig.jpg";
import Link from "next/link";
import Footer from "../components/Footer";
import Title from "../components/Title";

const articleFeatures = [
  ["Etsy Live Q&A (2021)", "https://www.instagram.com/tv/CLLCALTAkc5/"],
  [
    "Harper's Bazaar (2020)",
    "https://www.harpersbazaar.com/fashion/trends/g34824403/black-owned-vintage-stores/",
  ],
  [
    "Etsy Featured Shops (2020)",
    "https://blog.etsy.com/en/featured-shop-maw-supply/?ref=hp",
  ],
  [
    "Houston Chronicle (2020)",
    "https://www.houstonchronicle.com/life/article/Houston-Black-owned-fashion-beauty-food-15388460.php",
  ],
  [
    "Refinery29 (2020)",
    "https://www.refinery29.com/en-us/support-black-owned-etsy-shops",
  ],
  [
    "Houston Culture Map (2020)",
    "https://houston.culturemap.com/news/fashion/06-05-20-24-black-owned-business-houston-fashion-labels-beauty-lines-diverscity-leap-of-faith/#slide=0",
  ],
  ["Urban Swank (2017)", ""],
  [
    "Forward Times *2016)",
    "http://forwardtimes.com/maw-supply-changing-face-houston-vintage-fashion/",
  ],
  ["Recipe For Alchemy (2016)", ""],
  ["Fire + Knives (2015)", ""],
  ["HTX People Project (2015)", ""],
  ["The Houstonian (2015)", ""],
  ["The Hive Society (2014)", ""],
  ["The Houstonian (2013", ""],
];

const about = () => {
  return (
    <>
      <Head>
        <title>Maw Supply | About</title>
      </Head>
      <MyNavbar />
      <Title />
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto grid grid-cols-3"
      >
        <div className="col-start-2">
          <Image src={aboutImage} width={1003} height={1512} />
        </div>
      </motion.div>
      <div className="pt-10 pb-10 text-center px-[30rem]">
        <span className="col-start-2 text-xl">
          ​MAW SUPPLY, also known as Man and Woman, is a vintage and reclaimed
          apparel and accessories company founded in 2012 by husband and wife,
          Norman and Rachelle Clark. Specializing in sustainable day-to-day
          pieces, Norman and Rachelle share their love for vintage and
          secondhand goods that reflect simplicity, style, comfort, and
          individuality for the wardrobe of today.
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-3 pb-10"
      >
        <div className="col-start-2">
          <Image src={botImg} width={800} height={800} />
        </div>
      </motion.div>
      <div className="grid grid-cols-5 pt-10">
        <div className="col-start-2 col-span-3 h-1 w-full bg-black"></div>
      </div>
      <div>
        <h1 className="font-bold text-center pt-10">
          Featured in these articles:
        </h1>
        <ul className="block text-center">
          {articleFeatures.map((afPath) => {
            if (afPath[1] === "") {
              return (
                <li className="relative">
                  <div>{afPath[0]}</div>
                </li>
              );
            }
            return (
              <li className="relative" key={afPath[1]}>
                <Link href={afPath[1]}>
                  <a className="hover:text-amber-400 no-underline hover:underline">
                    {afPath[0]}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default about;
