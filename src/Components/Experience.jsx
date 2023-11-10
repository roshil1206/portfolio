import React from "react";
import Card from "./Card/Card";

const data = [
  {
    position: "MERN Stack Developer",
    company: "Xcitech Technologies",
    date: "2023-2022",
  },
  {
    position: "Software Developer Intern",
    company: "Slatemates",
    date: "2020-2021",
  },
  {
    position: "Android Developer Intern",
    company: "Sangawari Agrotech Foundation",
    date: "2020",
  },
];

const Experience = () => {
  return (
    <Card>
      <h5 className="mb-3 text-xl font-bold tracking-tight text-heading">
        Experience
      </h5>

      <ol className="relative border-l">
        {data.map((ele, key) => (
          <List {...ele} key={key} />
        ))}
      </ol>
    </Card>
  );
};

const List = ({ company, position, date }) => {
  return (
    <li className="mb-5 ml-4">
      <div className="absolute custbg w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

      <div className=" mb-2 flex items-center justify-between mb-2">
        <div>
          <p className="text-lg">{position}</p>
          <p className="text-sm">{company}</p>
        </div>

        <p>{date}</p>
      </div>
    </li>
  );
};

export default Experience;
