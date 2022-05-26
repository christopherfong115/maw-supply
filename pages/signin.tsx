import Head from "next/head";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { GetStaticProps, NextPage } from "next";

const signin: NextPage<{ providers: any }> = ({ providers }) => {
  return (
    <>
      <Head>
        <title>Sign In | Paintr</title>
      </Head>
      <div className="mx-auto">
        {Object.values(providers).map((provider: any) => {
          return (
            <div className="" key={provider.name}>
              <button
                className="p-4 bg-emerald-500 rounded-2xl shadow-2xl"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default signin;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      providers: await getProviders(),
    },
  };
};
