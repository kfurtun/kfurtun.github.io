import React from "react";
import styled from "styled-components";
export const LeftArrow = (props) => {
  const {
    setArrow,
    setIndex,
    index,
    projectsData,
    arrow,
    width,
    setShowedProjects,
    showedProjects,
  } = props;
  const handleClick = () => {
    setArrow("left");
    if (index === 0) {
      setIndex(projectsData.length - 1);
    } else if (index < 0) {
      setIndex(projectsData.length - 1 + index);
    } else {
      setIndex(index - 1);
    }
  };

  React.useEffect(() => {
    if (arrow === "left") {
      if (width < 500) {
        setShowedProjects([projectsData[index], ...showedProjects.slice(0, 2)]);
      } else if (arrow === "left") {
        setShowedProjects([projectsData[index], ...showedProjects.slice(0, 3)]);
      }
    }
  }, [index]);
  return <Arrow onClick={handleClick}>{"<"}</Arrow>;
};

const Arrow = styled.button`
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
