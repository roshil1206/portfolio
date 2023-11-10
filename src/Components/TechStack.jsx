import React from "react";
import Card from "./Card/Card";

const Stack = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "React",
  "Node",
  "React Native",
  "Next.js",
  "Flask",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "DynamoDB",
  "FireStore",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Redux",
  "SCSS",
  "AWS (Certified)",
  "Azure",
  "Google Cloud",
];

const TechStack = () => {
  return (
    <Card>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-heading ">
        Tech Stack
      </h5>
      <div className="flex gap-2 flex-wrap">
        {Stack.map((data, key) => (
          <Labels data={data} key={key} />
        ))}
      </div>
    </Card>
  );
};

const Labels = ({ data }) => {
  return (
    <div className="lb-comp">
      <p>{data}</p>
    </div>
  );
};

export default TechStack;
