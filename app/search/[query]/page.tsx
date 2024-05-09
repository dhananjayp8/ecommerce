"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import SearchResults from "@/components/SearchResults";

const page = () => {
  const { query } = useParams();
  //const { products, getDataFromSupabase } = useSupabase();
  const { filterData, getFilteredData } = useSupabase();
  useEffect(() => {
    getFilteredData(query.toString());
  }, []);
  console.log(filterData);

  return (
    <div>
      <SearchResults filterData={filterData} />
    </div>
  );
};

export default page;
