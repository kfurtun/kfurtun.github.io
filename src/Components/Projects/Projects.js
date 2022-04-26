import React from "react";
import { Project } from "./Project";
// import { LeftArrow } from "./LeftArrow";
// import { RightArrow } from "./RightArrow";
import styled from "styled-components";
import { projectsData } from "./projectsData";
import useWindowDimensions from "../useWindowDimesion";

export const Projects = () => {
  const { width } = useWindowDimensions();
  const [showedProjects, setShowedProjects] = React.useState(
    width >= 500 ? [...projectsData.slice(0, 4)] : [...projectsData.slice(0, 3)]
  );
  // const [leftIndex, setLeftIndex] = React.useState(0);
  // const [rightIndex, setRightIndex] = React.useState(3);
  // const [arrow, setArrow] = React.useState("");

  return (
    <Wrapper>
      {/* <LeftArrow
        width={width}
        setArrow={setArrow}
        setIndex={setLeftIndex}
        index={leftIndex}
        projectsData={projectsData}
        arrow={arrow}
        setShowedProjects={setShowedProjects}
        showedProjects={showedProjects}
      /> */}
      <Container>
        {showedProjects.map((project) => {
          return <Project project={project} />;
        })}
      </Container>
      {/* <RightArrow
        width={width}
        setArrow={setArrow}
        setIndex={setRightIndex}
        index={rightIndex}
        projectsData={projectsData}
        arrow={arrow}
        setShowedProjects={setShowedProjects}
        showedProjects={showedProjects}
      /> */}
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
