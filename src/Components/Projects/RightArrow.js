import React from "react";
import styled from "styled-components";

export const RightArrow = (props) => {
  const {
    projectsData,
    setShowedProjects,
    arrow,
    setArrow,
    index,
    setIndex,
    otherIndex,
    setOtherIndex,
    width,
  } = props;

  const handleClick = () => {
    setArrow("right");

    if (otherIndex === 0) {
      setOtherIndex(projectsData.length - 1);
    } else {
      setOtherIndex((prev) => prev - 1);
    }

    if (index === 0) {
      setIndex(projectsData.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  React.useEffect(() => {
    arrow === "right" &&
      (width >= 500
        ? setShowedProjects((prev) => [
            projectsData[index],
            ...prev.slice(0, 3),
          ])
        : setShowedProjects((prev) => [
            projectsData[index],
            ...prev.slice(0, 2),
          ]));
  }, [index]);
  return <Arrow onClick={handleClick}>{">"}</Arrow>;
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
