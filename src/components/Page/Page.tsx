import React from "react";

interface PageProps {
  title: string;
  text: string;
}

export const Page: React.FC<PageProps> = ({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      {/* Add more content and components as needed */}
    </div>
  );
};
