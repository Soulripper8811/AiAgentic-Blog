"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();

  const createNewUser = async () => {
    const result = await axios.post("/api/user");
    return result.data;
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    user && createNewUser();
  }, [user]);

  return <div>{children}</div>;
}

export default Provider;
