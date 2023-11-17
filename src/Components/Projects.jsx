import React from "react";
import Card from "./Card/Card";
import {
  SiAmazons3,
  SiAwslambda,
  SiAmazondynamodb,
  SiMaterialdesign,
  SiTensorflow,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaStripeS } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoFlask,
  BiLogoPython,
} from "react-icons/bi";

const data = [
  {
    name: "PicSort",
    link: "https://github.com/roshil1206/PicSort",
    desc: "AWS-based, cloud-native image storage application designed to efficiently store user pictures while also offering automated picture sorting into organized directories.",
    iconsList: [SiAmazons3, SiAwslambda, SiAmazondynamodb, FaReact, FaNodeJs],
  },
  {
    name: "CineVerse",
    link: "https://github.com/roshil1206/CineVerse",
    desc: "Movie-booking website that provides a platform for users to search, book tickets, and organize their movie-related activities.",
    iconsList: [FaReact, FaNodeJs, SiMaterialdesign, FaStripeS],
  },
  {
    name: "BrowniePoint",
    link: "https://github.com/roshil1206/Brownie-Point",
    desc: "Cross Platform Mobile application designed to track and manage student involvement, engagement, and performance in classrooms using a point system.",
    iconsList: [TbBrandReactNative, BiLogoSpringBoot, BiLogoJava],
  },
  {
    name: "Covid Detection App",
    link: "https://github.com/roshil1206/Brownie-Point",
    desc: "Application build to detect COVID-19 from the chest X-ray images of patient using Convolutional Neural Networks.",
    iconsList: [SiTensorflow, BiLogoFlask, BiLogoPython, FaReact],
  },
];

const Projects = () => {
  return (
    <Card variant2>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-heading">
        Projects
      </h5>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {data.map((item, key) => (
          <ProjectInfo {...item} key={key}></ProjectInfo>
        ))}
      </div>
    </Card>
  );
};

const ProjectInfo = ({ name, link, desc, iconsList }) => {
  return (
    <div className="col">
      <Card>
        <a
          className="mb-2 text-lg font-bold tracking-tight text-heading link"
          target="_blank"
          href={link}
          rel="noreferrer"
        >
          {name}
        </a>
        <p>{desc}</p>
        <div className="flex justify-end items-center gap-3 mt-3">
          {iconsList.map((Icon, key) => (
            <Icon style={{ fontSize: "20px" }} key={key} className="link" />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Projects;
