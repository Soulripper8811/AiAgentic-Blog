import React from "react";
import { auth } from "@clerk/nextjs/server";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const { userId } = await auth();
  return <NavbarClient userId={userId} />;
};

export default Navbar;
