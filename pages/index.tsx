import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>E-Comm | Home</title>
      </Head>
      <MyNavbar />
      {session?.user ? (
        <div>
          Welcome back, <span>{session?.user.name}</span>
          <button onClick={() => signOut()}>Log Out</button>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-amber-300 font-semibold text-lg rounded-2xl shadow-2xl"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
      <Footer />
    </>
  );
};

export default Home;
