import React from "react";
import "./Header.css"

interface HeaderProps {
  title: string;
  text?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{text}</p>
      {/* Add more content and components as needed */}
    </header>
  );
};
