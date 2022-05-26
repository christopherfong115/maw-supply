import Head from "next/head";
import React from "react";
import MyNavbar from "../components/MyNavbar";
import Image from "next/image";
import p34 from "../styles/photos/p34_orig.png";
import week2 from "../styles/photos/week-2-2_orig.jpg";
import { motion } from "framer-motion";
import week31 from "../styles/photos/week-3-1_orig.jpg";
import week32 from "../styles/photos/week-3-2_orig.jpg";
import { ImInstagram } from "react-icons/im";
import Footer from "../components/Footer";
import Title from "../components/Title";

const akomaTee = () => {
  return (
    <>
      <Head>
        <title>MawSupply | Akoma Tee</title>
      </Head>
      <MyNavbar />
      <div className="py-6 mb-10">
        <Title />
        <motion.div
          initial={{
            y: "100%",
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
          className="max-w-[1000px] mx-auto p-6 my-14 rounded-xl shadow-2xl bg-amber-200"
        >
          <motion.span className="font-semibold justify-self-center text-xl font-sans">
            Akoma Ntoso is a West African proverb and sacred symbol representing
            four hearts, forever linked together. Like chains their bonds are
            unwavering, and together, form a unique and undeniable force which
            speaks volumes to many. Agreement, understanding, and unity within
            communities are all principles represented, and principles that we
            stand for, and we hope you do too.
          </motion.span>
        </motion.div>
        <div className="p-4 grid grid-cols-2 gap-4 cursor-default pt-20">
          <Image src={p34} width={800} height={500} />
          <Image src={week2} width={1100} height={700} />
        </div>
        <div className="p-4 flex justify-around cursor-default pt-20">
          <div>
            <Image src={week31} width={500} height={800} />
          </div>
          <div>
            <Image src={week32} width={500} height={800} />
          </div>
        </div>
      </div>
    </>
  );
};

export default akomaTee;
