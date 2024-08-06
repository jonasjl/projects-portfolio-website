import React, { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "../Header/Header";
import "./Contact.css"


export const Contact: React.FC = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
    <Header title="Contact us" /><form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>

      <input type="submit" value="Submit" />
    </form>
    </>
  );
};

