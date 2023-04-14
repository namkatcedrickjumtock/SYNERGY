import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import CardComponent from "../components/card";

const IndexPage: NextPage = () => {
  return (
    <>
      {/* Todo:remove card */}
      <CardComponent />
    </>
  );
};

export default IndexPage;
