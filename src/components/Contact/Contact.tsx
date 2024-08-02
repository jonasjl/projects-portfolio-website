import React from "react";
import { Header } from "../Header/Header";


export const Contact: React.FC = () => {
  return (
    <div>
      <Header title={"Contact us"}/>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* Add more content and components as needed */}
    </div>
  );
};
