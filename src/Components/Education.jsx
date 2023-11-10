import React from "react";
import Card from "./Card/Card";

const data = [
  {
    degree: "Masters In Applied Computer Science",
    university: "Dalhousie University",
    date: "2023-2024",
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    university: "Gujarat Technological University",
    date: "2017-2021",
  },
];

const Education = () => {
  return (
    <Card>
      <h5 className="mb-3 text-xl font-bold tracking-tight text-heading">
        Education
      </h5>

      {data.map((ele, key) => (
        <List {...ele} key={key} />
      ))}
    </Card>
  );
};

const List = ({ degree, university, date }) => {
  return (
    <div className=" mb-2 flex items-center justify-between mb-2">
      <div>
        <p className="text-lg">{degree}</p>
        <p className="text-sm">{university}</p>
      </div>
      <p>{date}</p>
    </div>
  );
};

export default Education;
