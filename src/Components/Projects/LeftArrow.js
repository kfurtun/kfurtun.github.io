import React from "react";
import styled from "styled-components";

export const LeftArrow = (props) => {
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
    setArrow("left");
    if (otherIndex === projectsData.length - 1) {
      setOtherIndex(0);
    } else {
      setOtherIndex((prev) => prev + 1);
    }

    if (index === projectsData.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  React.useEffect(() => {
    arrow === "left" &&
      (width >= 500
        ? setShowedProjects((prev) => [
            ...prev.slice(1, 4),
            projectsData[index],
          ])
        : setShowedProjects((prev) => [
            ...prev.slice(1, 3),
            projectsData[index],
          ]));
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
