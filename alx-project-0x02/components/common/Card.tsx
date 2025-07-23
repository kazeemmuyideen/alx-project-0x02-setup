
import React from "react";
import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-xl shadow-md p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
// this component can be used to display cards with a title and content
// it can be imported and used in other components or pages
