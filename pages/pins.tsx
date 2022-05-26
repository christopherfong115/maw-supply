import Head from "next/head";
import React from "react";
import MyNavbar from "../components/MyNavbar";
import Image from "next/image";
import pins1 from "../styles/photos/pins1.jpg";
import pins2 from "../styles/photos/pins2.jpg";
import pins3 from "../styles/photos/pins3.jpg";
import { motion } from "framer-motion";
import pins4 from "../styles/photos/pins4.jpg";
import pins5 from "../styles/photos/pins5.jpg";
import pins6 from "../styles/photos/pins6.jpg";
import pins7 from "../styles/photos/pins7.jpg";
import pins8 from "../styles/photos/pins8.jpg";
import pins9 from "../styles/photos/pins9.jpg";
import pins10 from "../styles/photos/pins10.jpg";
import pins11 from "../styles/photos/pins11.jpg";
import pins12 from "../styles/photos/pins12.jpg";
import pins13 from "../styles/photos/pins13.jpg";
import Title from "../components/Title";

const imagePins2 = [pins4, pins5, pins6, pins7, pins8];
const imagePins3 = [pins9, pins10, pins11, pins12, pins13];

const pins = () => {
  return (
    <>
      <Head>
        <title>Maw Supply | Pins</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Tapestry&display=swap');
        </style>
      </Head>
      <MyNavbar />
      <Title />
      <div className="px-10 rounded-2xl bg-slate-200 shadow-2xl w-fit mx-auto mb-10">
        <div className="pt-8 pb-6 text-center text-5xl font-bold no-underline">
          <a className="font-libreBaskerville hover:text-neutral-300 text-gray-500 no-underline">
            Arie
          </a>
        </div>
        <iframe
          className="mx-auto py-2"
          width="1315"
          height="770"
          src="https://www.youtube.com/embed/2UGIp7G1tWg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="mx-auto grid grid-cols-3 gap-2 max-w-[1315px]">
          <div className="">
            <Image src={pins1} width={1024} height={1544} />
          </div>
          <div className="">
            <Image src={pins2} width={1024} height={1544} />
          </div>
          <div className="">
            <Image src={pins3} width={1024} height={1544} />
          </div>
        </div>
        <motion.div
          initial={{ background: "#e2e8f0", fontWeight: "normal" }}
          whileHover={{ background: "white", fontWeight: "bold" }}
          className="p-4 text-center mx-auto max-w-[1315px] rounded-2xl mb-4"
        >
          “[It's] two sides of the same coin. Realizing that one needs the
          other… and I just want [people] to know that its never really an
          either-or situation, its more about finding a balance that works for
          them, because its really just up to the individual. Masculinity and
          femininity are just apart of the human experience. So I had to embrace
          both.” -Arie W.
        </motion.div>
      </div>
      <div className="px-10 rounded-2xl bg-slate-200 shadow-2xl w-fit mx-auto mb-10">
        <div className="pt-10 pb-6 text-center text-5xl font-bold no-underline">
          <a className="font-libreBaskerville hover:text-neutral-300 text-gray-500 no-underline">
            {"Morganne & Bria"}
          </a>
        </div>
        <iframe
          className="mx-auto pb-2"
          width="1315"
          height="770"
          src="https://www.youtube.com/embed/orGWitSmS7Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="grid grid-cols-5 mx-auto gap-2 max-w-[1315px]">
          {imagePins2.map((imageP) => {
            return (
              <div>
                <Image src={imageP} width={1024} height={1544} />
              </div>
            );
          })}
        </div>
        <motion.div
          initial={{ background: "#e2e8f0", fontWeight: "normal" }}
          whileHover={{ background: "white", fontWeight: "bold" }}
          className="p-4 text-center mx-auto max-w-[1315px] rounded-2xl mb-4"
        >
          “Its very hard for me to differentiate between the two. I feel like
          defining it as either-or is very limiting. It stops people from having
          the courage to wear themselves fully and live against what society
          expects. Let people be people and act however they feel they need to
          act to achieve whatever they need to achieve for themselves... I don’t
          think it's for anyone to understand, not even myself. There are people
          in the world that are going to be different from you and I think the
          starting point is just accepting that difference does not mean
          alienation... difference is in the same way, kind of [like] saneness;
          because we’re all in these varying narratives and stories but we all
          arrive at the same emotions, and we don’t have to understand it. It
          just is what it is. ” ​-Morganne
        </motion.div>
        <motion.div
          initial={{ background: "#e2e8f0", fontWeight: "normal" }}
          whileHover={{ background: "white", fontWeight: "bold" }}
          className="p-4 text-center mx-auto max-w-[1315px] rounded-2xl mb-4"
        >
          “I don’t think it has anything to do with male [or] female. There’s
          not a definite way to describe either. It’s definitely an energy,
          [and] I think it’s all about owning how you dare to step into your
          power, day to day.” -Bria
        </motion.div>
      </div>
      <div className="px-10 rounded-2xl bg-slate-200 shadow-2xl w-fit mx-auto mb-10">
        <div className="pt-10 pb-6 text-center text-5xl font-bold no-underline">
          <a className="font-libreBaskerville hover:text-neutral-300 text-gray-500 no-underline">
            Nate & Ari
          </a>
        </div>
        <iframe
          className="mx-auto"
          width="1315"
          height="770"
          src="https://www.youtube.com/embed/JyAit3ciTrE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="grid grid-cols-5 mx-auto max-w-[1315px] gap-2 pt-2">
          {imagePins3.map((imageP3) => {
            return (
              <div>
                <Image src={imageP3} width={1024} height={1544} />
              </div>
            );
          })}
        </div>
        <div className="mx-auto max-w-[1250px] mb-5 text-center">
          <motion.div
            initial={{ background: "#e2e8f0", fontWeight: "normal" }}
            whileHover={{ background: "white", fontWeight: "bold" }}
            className="p-4 text-center mx-auto max-w-[1315px] rounded-2xl mb-4"
          >
            “To me, those are just ways to compartmentalize characteristics.
            [Masculinity and femininity is] the balance needed in all things.
            Both are needed to work cohesively together. But they are just
            labels. I don’t try to reduce it to just a word.” ​-Nate
          </motion.div>
          <motion.div
            initial={{ background: "#e2e8f0", fontWeight: "normal" }}
            whileHover={{ background: "white", fontWeight: "bold" }}
            className="p-4 text-center mx-auto max-w-[1315px] rounded-2xl mb-4"
          >
            “I know when I was younger, I might have been a bit more feminine.
            You know how when you’re growing up, everything is pink…i ts
            feminine, its for girls. That was kind of shoved on me when I was
            little, but as I grew up, I evolved. [Masculine and feminine is] not
            black and white. I don’t think I’m either or, I definitely have my
            moments where I’m just like a mix of both.” ​-Ari
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default pins;
