import React from "react";
import Card from "./Card/Card";
import { FaAws } from "react-icons/fa";

const data = [
  {
    Icon: FaAws,
    name: "AWS Certified Solutions Architect",
    link: "https://www.credly.com/badges/756d034a-830c-4d4e-bcdf-f67085f9533c/public_url",
    date: "August 2023",
  },
  {
    Icon: FaAws,
    name: "AWS Certified Cloud Practioner",
    link: "https://www.credly.com/badges/18299051-b29f-44f9-b86a-14ab28634b1f/public_url",
    date: "June 2023",
  },
];

export const Certifications = () => {
  return (
    <Card>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-heading ">
        Certifications
      </h5>
      {data.map((element, key) => (
        <List {...element} key={key} />
      ))}
    </Card>
  );
};

const List = ({ Icon, name, date, link }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2 link">
        <Icon />
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>

      <p>{date}</p>
    </div>
  );
};
