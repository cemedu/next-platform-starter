"use client";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import PopUpCardType from "../popup-cards/PopUpCardType";
import { StateProvider } from "@/context/StateProvider";
import GoBackForwordButton from "../button/GoBackForwordButton";

const Layout = ({ children, user }) => {
  return (
    <>
      <StateProvider>
        <main className="max-h-[100vh] overflow-y-auto no-scrollbar">
          <Navbar user={user} />
          {children}
          <PopUpCardType />
          <hr />
          <Footer2 />
        </main>
        <div className="fixed bottom-0 left-0 right-0 z-20">
          <GoBackForwordButton />
        </div>
      </StateProvider>
    </>
  );
};

export default React.memo(Layout);
