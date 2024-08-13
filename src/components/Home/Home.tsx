import React from "react";
import { Header } from "../Header/Header";
import WeatherApp from "../Wheaterapp/Wheaterapp";

export const Home: React.FC = () => {
  return (
    <div>
      <Header title="Welcome to Our Application" text="This is the main landing page"/>
      {/* <WeatherApp/> */}
    </div>
  );
};
