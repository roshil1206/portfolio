import React from "react";
import Card from "./Card/Card";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const details = [
  { Icon: MdLocationOn, label: "Based In:", value: "Canada" },
  {
    Icon: FaGithub,
    label: "Github:",
    value: "roshil1206",
    link: "https://github.com/roshil1206",
  },
  {
    Icon: FaLinkedinIn,
    label: "Linkedin:",
    value: "roshilkapatel",
    link: "www.linkedin.com/in/roshilkapatel/",
  },
  {
    Icon: MdEmail,
    label: "Email:",
    value: "roshilkapatel2000@gmail.com",
  },
];

const Details = () => {
  return (
    <Card>
      {details.map((data, key) => (
        <List {...data} key={key} />
      ))}
    </Card>
  );
};

const List = ({ Icon, label, value, link }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <Icon />
        <p>{label}</p>
      </div>
      {link ? (
        <a href={link} target="_blank" className="link" rel="noreferrer">
          {value}
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};

export default Details;
