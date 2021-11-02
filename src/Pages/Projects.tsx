import { ReactElement } from "react";
import { CardGroup } from "reactstrap";
import ProjectCard, { ProjectCardProps } from "../Components/ProjectCard";
import sort from "../images/SortingVisualizerImage.png";
import portfolio from "../images/portfolio.png";
import codehub from "../images/codehub.png";

const Projects = (): ReactElement => {
  const projectData: ProjectCardProps[] = [
    {
      image: sort,
      link: "https://blissful-curran-6b12f3.netlify.app/",
      title: "Sorting Visualizer",
      body: 'One of my first React projects, where I visualize the "Merge Sort" sorting algorithm. The goal of this project was to familiarize myself with the basic concepts of React as well as learn about sorting algorithms.',
    },
    {
      title: "Youtube Playlist Creator",
      image: codehub,
      link: "https://ytcodehub.web.app/",
      body: "React project using external libraries and APIs. This project uses Firebase for user authentication, database, and hosting. My goal for this project was to learn to read and implement external documentaion like the Youtube API, Reactstrap, and Firebase.",
    },
    {
      image: portfolio,
      title: "My Portfolio Website",
      body: "This project was created using React with Typescript. I learnt to send emails from my website using an external library. For the home page I used css animations.",
    },
  ];

  return (
    <CardGroup>
      {projectData.map((project, idx) => (
        <ProjectCard
          image={project.image}
          title={project.title}
          body={project.body}
          link={project.link}
          id={idx}
        />
      ))}
    </CardGroup>
  );
};

export default Projects;
