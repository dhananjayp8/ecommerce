"use client";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { query } = useParams();
  return <div>{query}</div>;
};

export default page;
