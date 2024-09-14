"use client";
import React, { useContext, useEffect } from "react";
import "./style.css";
import Link from "next/link";
import SearchBarCard2 from "../cards/SearchBarCard2";
import Navbar2 from "./Navbar2";
import SearchBarCard3 from "../cards/SearchBarCard3";
import Container2 from "../container/Container2";
import NavbarBottom from "./NavbarBottom";
import { Context } from "@/context/StateProvider";
import StoreAction from "@/context/context.action";
import Image from "next/image";
import Img from "@/library/images";

const Navbar = ({ user }) => {
  const { dispatch, state } = useContext(Context);

  useEffect(() => {
    if (user.id) {
      dispatch({ type: StoreAction.user, payload: user });
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (!state.reading_mode) {
      setTimeout(() => {
        // dispatch({ type: StoreAction.popup, payload: [true, 'reading_mode'] });
      }, 5000);
    }
  }, [dispatch, state.reading_mode]);

  return (
    <nav className="bg-[var(--bg1)] text-[var(--text1)] w-full header py-2">
      <Container2>
        <div className="mx-auto flex justify-between items-center relative">
          <div className="text-2xl font-bold max-w-[150px] overflow-hidden">
            <Link className="nowrap text-[var(--icon)]" href={"/"}>
              <Image src={Img.logo}
                width={400}
                height={200}
                alt="cemedu.com logo | cemedu logo"
                className="w-[100px] h-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-6">
            <SearchBarCard2 />
          </div>
          <Navbar2 user={user} />
        </div>
        <div className="md:hidden mt-2">
          <SearchBarCard3 />
        </div>
        <NavbarBottom />
      </Container2>
    </nav>
  );
};

export default Navbar;
