import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FormComponent from "../components/form";
import HeroSection from "../components/herosection";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="max-w-2xl flex justify-center items-center mx-auto my-5">
        {/* <HeroSection/> */}
        <FormComponent />
      </div>
    </>
  );
};

export default IndexPage;
