import React from "react";
import { Project } from "./Project";
import styled from "styled-components";
import { projectsData } from "./projectsData";
import useWindowDimensions from "../useWindowDimesion";

export const Projects = () => {
  const [showedProjects, setShowedProjects] = React.useState([...projectsData]);
  const [index, setIndex] = React.useState(1);
  const { width } = useWindowDimensions();

  const handleClick = () => {
    if (width < 500) {
      setShowedProjects([
        projectsData[projectsData.length - index],
        ...showedProjects.slice(0, 2),
      ]);

      if (index === projectsData.length) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    } else {
      setShowedProjects([
        projectsData[projectsData.length - index],
        ...showedProjects.slice(0, 3),
      ]);

      if (index === projectsData.length) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    }
  };
  return (
    <Wrapper>
      <ArrowButton onClick={handleClick}>{"<"}</ArrowButton>
      <Container>
        {width > 500
          ? showedProjects.slice(0, 4).map((project) => {
              return <Project project={project} />;
            })
          : showedProjects.slice(0, 3).map((project) => {
              return <Project project={project} />;
            })}
      </Container>
      <ArrowButton onClick={handleClick}>{">"}</ArrowButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1vw;
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
  margin: auto;
  padding: 0 1vw;
  gap: 2vw;
  @media (max-width: 500px) {
    width: 60vh;
  }
`;

const ArrowButton = styled.button`
  cursor: pointer;
  width: 2vw;
  height: 2vw;
  font-size: 1vw;
  @media (max-width: 500px) {
    width: 2vh;
    height: 2vh;
    font-size: 1vh;
  }
`;
