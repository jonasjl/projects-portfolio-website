import React from "react";
import { Header } from "../Header/Header";
import { SortableTable } from "../Sortingtable/SortableTable";
import data from "../Sortingtable/data.json"

export const About: React.FC = () => {
  return (
    <div>
      <Header title="About Us" text="Learn more about our company and team"/>
      <SortableTable data={data}/> 
    </div>
  );
};
