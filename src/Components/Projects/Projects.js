import React from "react";
import { Project } from "./Project";
import { RightArrow } from "./RightArrow";
import { LeftArrow } from "./LeftArrow";
import styled from "styled-components";
import { projectsData } from "./projectsData";
import useWindowDimensions from "../useWindowDimesion";

export const Projects = () => {
  const { width } = useWindowDimensions();
  const [showedProjects, setShowedProjects] = React.useState(
    width >= 500 ? [...projectsData.slice(0, 4)] : [...projectsData.slice(0, 3)]
  );
  const [arrow, setArrow] = React.useState("");
  const [rightIndex, setRightIndex] = React.useState(0);
  const [leftIndex, setLeftIndex] = React.useState(width >= 500 ? 3 : 2);

  return (
    <Wrapper>
      <LeftArrow
        projectsData={projectsData}
        setShowedProjects={setShowedProjects}
        arrow={arrow}
        setArrow={setArrow}
        index={leftIndex}
        setIndex={setLeftIndex}
        setOtherIndex={setRightIndex}
        otherIndex={rightIndex}
        width={width}
      />
      <Container>
        {showedProjects.map((project) => {
          return <Project project={project} />;
        })}
      </Container>
      <RightArrow
        projectsData={projectsData}
        setShowedProjects={setShowedProjects}
        arrow={arrow}
        setArrow={setArrow}
        index={rightIndex}
        setIndex={setRightIndex}
        setOtherIndex={setLeftIndex}
        otherIndex={leftIndex}
        width={width}
      />
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
