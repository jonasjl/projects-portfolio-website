import React from "react";

interface HeaderProps {
  title: string;
  text?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      {/* Add more content and components as needed */}
    </div>
  );
};
